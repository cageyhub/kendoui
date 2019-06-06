import * as React from "react";
import { Grid, GridColumn, GridDetailRow, GridToolbar } from "@progress/kendo-react-grid";
import { PAGE_SIZE } from "../../../assets/constants";
import { DATE_FORMAT } from "../../../assets/constants";
import { todoList } from "../../../assets/data/todoList.js";
import { Renderers } from "./renderers.jsx";

function cloneProduct(product) {
  return Object.assign({}, product);
}

class StatusNameHeader extends React.Component {
  render() {
    return (
      <span title={this.props.title} style={{ color: "#53d2fa" }}>
        {this.props.title}
      </span>
    );
  }
}

class DetailComponent extends GridDetailRow {
  render() {
    const data = this.props.dataItem.details;
    if (data) {
      return (
        <Grid data={data}>
          <GridColumn field="id" width="0px" headerCell={false} />
          <GridColumn
            field="task"
            title="Task"
            width="150px"
            headerCell={false}
          />
          <GridColumn
            field="patient"
            title="Patient"
            width="150px"
            headerCell={false}
          />
          <GridColumn field="group" title="Group" width="100px" />
          <GridColumn field="activity" title="Activity" width="150px" />
          <GridColumn field="number" title="#" width="50px" />
          <GridColumn
            field="creationDate"
            title="Creation Date"
            width="150px"
            editor="date"
            format={DATE_FORMAT}
          />
          <GridColumn field="createdBy" title="Created By" width="120px" />
          <GridColumn field="assignedTo" title="Assigned To" width="150px" />
          <GridColumn field="contactType" title="Contact Type" width="120px" />
          <GridColumn field="note" title="Note" width="190px" />
          <GridColumn field="status" title="Status" width="120px" />
          <GridColumn
            field="statusUpdete"
            title="Status Updete"
            width="150px"
            editor="date"
            format={DATE_FORMAT}
          />
        </Grid>
      );
    }
    return (
      <div style={{ height: "50px", width: "100%" }}>
        <div style={{ position: "absolute", width: "100%" }}>
          <div className="k-loading-image" />
        </div>
      </div>
    );
  }
}

export class Table3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: [...todoList.data[0]],
      total: todoList.total,
      sort: [{ field: "task", dir: "asc" }],
      page: 0,
      editID: null,
      group: [{ field: "group" }],
      editItem: undefined,
      changes: false
    };
    this.renderers = new Renderers(
      this.enterEdit.bind(this),
      this.exitEdit.bind(this),
      "inEdit"
    );
  }

  onScrollHandler = event => {
    const e = event.nativeEvent;
    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const page = this.state.page + 1;

      if (this.state.gridData.length >= this.state.total) {
        return;
      }

      const newData = [...this.state.gridData, ...todoList.data[page]];
      this.setState(state => ({
        gridData: [...newData],
        page
      }));
    }
  };

  onSortChange = e => {
    this.setState(state => ({
      sort: e.sort
    }));
  };

  expandChange = event => {
    event.dataItem.expanded = event.value;
    let id = event.dataItem.id;
    this.setState({ ...this.state });
    if (!event.value || event.dataItem.details) {
      return;
    }

    let data = this.state.gridData.slice();
    let index = data.findIndex(d => d.id === id);
    data[index].details = todoList.details[index];

    this.setState({ gridData: data });
  };

  enterEdit = (dataItem, field) => {
    if (dataItem.inEdit && field === this.state.editField) {
      return;
    }
    this.exitEdit();
    dataItem.inEdit = field;
    this.setState({
      editField: field,
      gridData: this.state.gridData
    });
  };

  exitEdit = () => {
    this.state.gridData.forEach(d => {
      d.inEdit = undefined;
    });
    this.setState({
      gridData: this.state.gridData,
      editField: undefined
    });
  };

  saveChanges = () => {
    todoList.data[this.state.page].splice(0, todoList.data[this.state.page].length, ...this.state.gridData);
    this.setState({
      gridData: todoList.data[this.state.page].map(cloneProduct),
      editField: undefined,
      changes: false
    });
  };

  cancelChanges = () => {
    this.setState({
      gridData: todoList.data[this.state.page].map(cloneProduct),
      changes: false
    });
  };

  itemChange = event => {
    event.dataItem[event.field] = event.value;
    this.setState({
      changes: true
    });
  };

  render() {
    const { gridData, total, sort } = this.state;

    return (
      <div>
        <Grid
          style={{ height: "300px" }}
          // data={filterBy(groupData, filter)}
          data={gridData}
          total={total}
          pageSize={PAGE_SIZE}
          onScroll={this.onScrollHandler}
          sortable
          sort={sort}
          onSortChange={this.onSortChange}
          editField="inEdit"
          onItemChange={this.itemChange}
          cellRender={this.renderers.cellRender}
          rowRender={this.renderers.rowRender}
          resizable
          reorderable
          onExpandChange={this.expandChange}
          expandField="expanded"
          detail={DetailComponent}
          rowHeight={50}
        >
             <GridToolbar>
                    <button
                        title="Save Changes"
                        className="k-button"
                        onClick={this.saveChanges}
                        disabled={!this.state.changes}
                    >
                        Save Changes
                </button>
                    <button
                        title="Cancel Changes"
                        className="k-button"
                        onClick={this.cancelChanges}
                        disabled={!this.state.changes}
                    >
                        Cancel Changes
                </button>
                </GridToolbar>
          <GridColumn field="id" width="0px" headerCell={false} />
          <GridColumn
            field="task"
            title="Task"
            width="150px"
            headerCell={false}
          />
          <GridColumn
            field="patient"
            title="Patient"
            width="150px"
            headerCell={false}
          />
          <GridColumn field="group" title="Group" width="100px" />
          <GridColumn field="activity" title="Activity" width="150px" />
          <GridColumn field="number" title="#" width="50px" />
          <GridColumn
            field="creationDate"
            title="Creation Date"
            width="150px"
            editor="date"
            format={DATE_FORMAT}
          />
          <GridColumn field="createdBy" title="Created By" width="120px" />
          <GridColumn field="assignedTo" title="Assigned To" width="150px" />
          <GridColumn field="contactType" title="Contact Type" width="120px" />
          <GridColumn field="note" title="Note" width="190px" />
          <GridColumn
            field="status"
            title="Status"
            width="120px"
            headerCell={StatusNameHeader}
          />
          <GridColumn
            field="statusUpdete"
            title="Status Updete"
            width="120px"
            editor="date"
            format={DATE_FORMAT}
          />
        </Grid>
      </div>
    );
  }
}
