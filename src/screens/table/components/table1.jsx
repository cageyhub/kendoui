import * as React from "react";

import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PAGE_SIZE } from "../../../assets/constants";
import { orderBy } from "@progress/kendo-data-query";
import { DATE_FORMAT } from "../../../assets/constants";
import { DropDownCell } from "./DropDownCell";
import { taskHistory } from "../../../assets/data/taskHistory.js";

export class Table1 extends React.Component {
   state = {
    taskHistory: [],
    total: 0,
    page: 1,
    sort: [{ field: "activity", dir: "asc" }],
    editID: null,
  };

   componentDidMount() {
    try {
      const data = [...taskHistory.data[0]];
      const total = taskHistory.total;
      this.setState((state) => ({
        taskHistory: data,
        total,
        page: 0,
      }));

    } catch (e) {
      console.error(e);
    }
  }

  onScrollHandler = (event) => {
    const e = event.nativeEvent;
    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const page = this.state.page + 1;

      if (this.state.taskHistory.length >= this.state.total) {
        return;
      }
  
      const newData = [...this.state.taskHistory, ...taskHistory.data[page]];
      this.setState((state) => ({
        taskHistory: [...newData],
        page
      }));
    }
  };

  onSortChange = (e) => {
    this.setState((state) => ({
      sort: e.sort
    }));
  };

  rowRender = (trElement, props) => {
    const inprogress = props.dataItem.status === "inprogress";
    const todo = props.dataItem.status === "todo";
    const green = { backgroundColor: "rgb(55, 180, 0, 0.2)" };
    const red = { backgroundColor: "rgb(243, 23, 0, 0.2)" };
    const transparent = { backgroundColor: "transparent" };

    const trProps = { style: inprogress ? green : todo ? transparent : red};
    return React.cloneElement(
      trElement,
      { ...trProps },
      trElement.props.children
    );
  };

  rowClick = (e) => {
    this.setState((state) => ({
      editID: e.dataItem.id
    }));
  };

  itemChange = (e) => {
    const data = this.state.taskHistory.slice();
    const index = data.findIndex(d => d.id === e.dataItem.id);
    data[index] = { ...data[index], [e.field]: e.value };
    this.setState((state) => ({
      taskHistory: data
    }));
  };


  render() {
    const { taskHistory, total, sort, editID} = this.state;

    return (
      <div>
        <Grid
          style={{ height: "158px" }}
          // data={orderBy(state.sampleData, state.sort)}
          data={orderBy(
            taskHistory.map(item =>
              Object.assign(
                {
                  inEdit: item.id === editID
                },
                item
              )
            ),
            sort
          )}
          total={total}
          pageSize={PAGE_SIZE}
          onScroll={this.onScrollHandler}
          sortable
          sort={sort}
          onSortChange={this.onSortChange}
          resizable
          reorderable
          editField="inEdit"
          onRowClick={e => this.rowClick(e)}
          onItemChange={e => this.itemChange(e)}
          rowRender={this.rowRender}
          // filterable
        >
          <GridColumn field="id" width="0px" />
          <GridColumn field="activity" title="Activity" width="180px" />
          <GridColumn
            field="createDate"
            title="Create Date"
            width="120px"
            editor="date"
            format={DATE_FORMAT}
          />
          <GridColumn
            field="deadline"
            title="Deadline"
            width="120px"
            editor="date"
            format={DATE_FORMAT}
          />
          <GridColumn field="createdBy" title="Created By" width="100px" />
          <GridColumn field="contactWith" title="Contact With" width="150px" />
          <GridColumn field="note" title="Note" width="150px" />
          <GridColumn
            field="status"
            title="Status"
            width="150px"
            cell={DropDownCell}
          />
          <GridColumn
            field="statusUpdate"
            title="Status Update"
            width="120px"
            editor="date"
            format={DATE_FORMAT}
          />
        </Grid>
      </div>
    );
  }
}
