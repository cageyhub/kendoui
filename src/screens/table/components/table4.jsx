import * as React from "react";

import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PAGE_SIZE } from "../../../assets/constants";
import { orderBy } from "@progress/kendo-data-query";
import { DATE_FORMAT } from "../../../assets/constants";
import { DropDownCell } from "./DropDownCell";
import { taskHistory } from "../../../assets/data/taskHistoryList.js";

export class Table4 extends React.Component {
  state = {
    taskHistory: [],
    total: taskHistory.total,
    sort: [{ field: "activity", dir: "asc" }],
    editID: null,
    skip: 0,
    take: 4
  };

  componentDidMount() {
    try {
      const data = [...taskHistory.data];
      const total = taskHistory.total;
      this.setState(state => ({
        taskHistory: data,
        total
      }));
    } catch (e) {
      console.error(e);
    }
  }

  onSortChange = e => {
    this.setState(state => ({
      sort: e.sort
    }));
  };

  rowRender = (trElement, props) => {
    const inprogress = props.dataItem.status === "inprogress";
    const todo = props.dataItem.status === "todo";
    const green = { backgroundColor: "rgb(55, 180, 0, 0.2)" };
    const red = { backgroundColor: "rgb(243, 23, 0, 0.2)" };
    const transparent = { backgroundColor: "transparent" };

    const trProps = { style: inprogress ? green : todo ? transparent : red };
    return React.cloneElement(
      trElement,
      { ...trProps },
      trElement.props.children
    );
  };

  rowClick = e => {
    this.setState(state => ({
      editID: e.dataItem.id
    }));
  };

  itemChange = e => {
    const data = this.state.taskHistory.slice();
    const index = data.findIndex(d => d.id === e.dataItem.id);
    data[index] = { ...data[index], [e.field]: e.value };
    this.setState(state => ({
      taskHistory: data
    }));
  };

  pageChange = event => {
    console.log("event.page", event.page);

    this.setState({
      skip: event.page.skip,
      take: event.page.take
    });
  };

  render() {
    const { taskHistory, total, sort, editID, skip, take } = this.state;

    return (
      <div>
        <Grid
          style={{ height: "240px" }}
          // data={orderBy(state.sampleData, state.sort)}
          data={orderBy(
            taskHistory
              .slice(this.state.skip, this.state.take + this.state.skip)
              .map(item =>
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
          sortable
          sort={sort}
          onSortChange={this.onSortChange}
          resizable
          editField="inEdit"
          onRowClick={e => this.rowClick(e)}
          onItemChange={e => this.itemChange(e)}
          rowRender={this.rowRender}
          skip={skip}
          take={take}
          pageable={true}
          onPageChange={this.pageChange}
          // filterable
        >
          <GridColumn field="id" width="0px" />
          <GridColumn field="activity" title="Activity" width="180px" />
          <GridColumn
            field="createDate"
            title="Create Date"
            width="150px"
            editor="date"
            format={DATE_FORMAT}
          />
          <GridColumn
            field="deadline"
            title="Deadline"
            width="150px"
            editor="date"
            format={DATE_FORMAT}
          />
          <GridColumn field="createdBy" title="Created By" width="170px" />
          <GridColumn field="contactWith" title="Contact With" width="170px" />
          <GridColumn field="note" title="Note" width="150px" />
          <GridColumn
            field="status"
            title="Status"
            width="170px"
            cell={DropDownCell}
          />
          <GridColumn
            field="statusUpdate"
            title="Status Update"
            width="170px"
            editor="date"
            format={DATE_FORMAT}
          />
        </Grid>
      </div>
    );
  }
}
