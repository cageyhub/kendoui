import * as React from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { PAGE_SIZE } from "../../../assets/constants";
import { filterBy } from "@progress/kendo-data-query";
import { DATE_FORMAT } from "../../../assets/constants";
// import { DragCell } from "./DragCell";
import { groupHistory } from "../../../assets/data/groupsHistory.js";
import { Popup } from "@progress/kendo-react-popup";
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import DialogContainer from "./DialogContainer";
import cellWithEditing from "./CellWithEditing";

export const DragCell = props => {
  return (
    <td
      onDragOver={() => {
        DragCell.reorder(props.dataItem);
      }}
    >
      <span
        className="k-icon k-i-reorder"
        draggable
        style={{ cursor: "move" }}
        onDragStart={e => {
          DragCell.dragStart(props.dataItem);
          e.dataTransfer.setData("dragging", "");
        }}
      />
    </td>
  );
};

export class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: [...groupHistory.data[0]],
      total: groupHistory.total,
      page: 0,
      sort: [{ field: "activity", dir: "asc" }],
      editID: null,
      activeItem: null,
      active: null,
      filter: {
        logic: "or",
        filters: [{ field: "group", operator: "contains", value: "" }]
      }
    };
    DragCell.reorder = this.reorder.bind(this);
    DragCell.dragStart = this.dragStart.bind(this);
  }

  reorder = dataItem => {
    if (this.state.activeItem === dataItem) {
      return;
    }
    let reorderedData = this.state.gridData.slice();
    let prevIndex = reorderedData.findIndex(p => p === this.state.activeItem);
    let nextIndex = reorderedData.findIndex(p => p === dataItem);
    reorderedData.splice(prevIndex, 1);
    reorderedData.splice(nextIndex, 0, this.state.activeItem);

    this.setState(state => ({
      gridData: reorderedData,
      active: this.state.activeItem
    }));
  };

  dragStart = dataItem => {
    this.setState(state => ({
      gridData: this.state.gridData,
      activeItem: dataItem
    }));
  };

  handleMoveUp = () => {
    let data = [...this.state.gridData];
    if (this.dataItemIndex !== 0) {
      data.splice(this.dataItemIndex, 1);
      data.splice(this.dataItemIndex - 1, 0, this.dataItem);
      this.setState({ gridData: data });
    }
  };

  handleMoveDown = () => {
    let data = [...this.state.gridData];
    if (this.dataItemIndex < this.state.gridData.length) {
      data.splice(this.dataItemIndex, 1);
      data.splice(this.dataItemIndex + 1, 0, this.dataItem);
      this.setState({ gridData: data });
    }
  };

  handleDelete = () => {
    let data = [...this.state.gridData];
    data.splice(this.dataItemIndex, 1);
    this.setState({
      gridData: data
    });
  };

  handleOnSelect = e => {
    switch (e.item.text) {
      case "Move Up":
        this.handleMoveUp();
        break;
      case "Move Down":
        this.handleMoveDown();
        break;
      case "Delete":
        this.handleDelete();
        break;
      default:
    }
    this.setState({
      open: false
    });
  };

  handleContextMenuOpen = (e, dataItem) => {
    this.dataItem = dataItem;
    this.dataItemIndex = this.state.gridData.findIndex(
      p => p.id === this.dataItem.id
    );
    this.offset = { left: e.clientX, top: e.clientY };
    this.setState({
      open: true
    });
  };

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

      const newData = [...this.state.gridData, ...groupHistory.data[page]];
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

  rowRender = (trElement, dataItem) => {
    const trProps = {
      ...trElement.props,
      onContextMenu: e => {
        e.preventDefault();
        this.handleContextMenuOpen(e, dataItem.dataItem);
      }
    };
    return React.cloneElement(
      trElement,
      { ...trProps },
      trElement.props.children
    );
  };

  onFilterChange = e => {
    this.setState({
      filter: e.filter
    });
  };

  edit = dataItem => {
    this.setState({ itemInEdit: this.cloneProduct(dataItem) });
  };

  remove = dataItem => {    
    const gridData = this.state.gridData.slice();
    const index = gridData.findIndex(p => p.id === dataItem.id);
    if (index !== -1) {
      gridData.splice(index, 1);
      this.setState({
        gridData
      });
    }
  };

  generateId() {
    return this.state.total + 11;
  }

  newItem = source => {
    const newItem = {
      id: this.generateId(),
      group: "",
      subGroup: "",
      groupName: "",
      startDate: new Date(),
      endDate: new Date(),
      user: ""
    };

    return Object.assign(newItem, source);
  };

  save = () => {
    const dataItem = this.state.itemInEdit;
    const gridData = this.state.gridData.slice();

    if (dataItem.id === undefined) {
      gridData.unshift(this.newItem(dataItem));
    } else {
      const index = gridData.findIndex(p => p.id === dataItem.id);
      gridData.splice(index, 1, dataItem);
    }

    this.setState({
      gridData,
      itemInEdit: undefined
    });
  };

  cancel = () => {
    this.setState({ itemInEdit: undefined });
  };

  insert = () => {
    this.setState({ itemInEdit: {} });
  };

  addRecord = () => {
    const newRecord = { id: this.state.gridData.length + 1 };
    const gridData = this.state.gridData.slice();
    gridData.unshift(newRecord);
    this.setState({
      gridData,
      editID: newRecord.id
    });
  };

  rowClick = e => {
    this.setState({
      editID: e.dataItem.id
    });
  };

  itemChange = e => {
    const gridData = this.state.gridData.slice();
    const index = gridData.findIndex(d => d.id === e.dataItem.id);
    gridData[index] = { ...gridData[index], [e.field]: e.value };
    this.setState({
      gridData
    });
  };

  render() {
    const { gridData, total, filter } = this.state;

    return (
      <div>
        <Popup
          offset={this.offset}
          show={this.state.open}
          popupClass={"popup-content"}
        >
          <Menu
            vertical={true}
            style={{ display: "inline-block" }}
            onSelect={this.handleOnSelect}
          >
            <MenuItem text="Move Up" />
            <MenuItem text="Move Down" />
            <MenuItem text="Delete" />
          </Menu>
        </Popup>

        <Grid
          style={{ height: "290px" }}
          data={filterBy(gridData, filter)}
          // data={gridData}
          total={total}
          pageSize={PAGE_SIZE}
          onScroll={this.onScrollHandler}
          sortable
          // sort={sort}
          onSortChange={this.onSortChange}
          resizable
          reorderable
          rowRender={this.rowRender}
          // editField="inEdit"
          // onRowClick={e => this.rowClick(e)}
          // onItemChange={e => this.itemChange(e)}
          filterable
          filter={filter}
          onFilterChange={e => {
            this.onFilterChange(e);
          }}
          // filterOperators={{
          //     'text': [
          //      { text: 'grid.filterContainsOperator', operator: 'contains' }

          //     ],
          //    // 'numeric': [
          //    //     { text: 'grid.filterEqOperator', operator: 'eq' }

          //    // ],
          //    // 'date': [
          //     //    { text: 'grid.filterEqOperator', operator: 'eq' }
          //     //]
          // }}
        >
          <GridToolbar>
            <button onClick={this.insert} className="k-button">
              Add New
            </button>
          </GridToolbar>
          <GridColumn
            title=""
            width="50px"
            cell={DragCell}
            filterable={false}
          />
          <GridColumn field="id" width="0px" filterable={false} />
          <GridColumn field="group" title="Group" width="190px" />
          <GridColumn
            field="subGroup"
            title="Sub Group"
            width="190px"
          />
          <GridColumn
            field="groupName"
            title="Group Name"
            width="150px"
            filterable={false}
          />
          <GridColumn
            field="startDate"
            title="Start Date"
            width="190px"
            editor="date"
            filter="date"
            format={DATE_FORMAT}
          />
          <GridColumn
            field="endDate"
            title="End Date"
            width="120px"
            editor="date"
            format={DATE_FORMAT}
            filterable={false}
          />
          <GridColumn field="user" title="User" width="190px" />
          <GridColumn
            width="190px"
            title="Edit"
            filterable={false}
            cell={cellWithEditing(this.edit, this.remove)}
          />
        </Grid>
        {this.state.itemInEdit && (
          <DialogContainer
            dataItem={this.state.itemInEdit}
            save={this.save}
            cancel={this.cancel}
          />
        )}
      </div>
    );
  }

  dialogTitle() {
    return `${this.state.itemInEdit.id === undefined ? "Add" : "Edit"}`;
  }
  cloneProduct(data) {
    return Object.assign({}, data);
  }
}
