
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './products.json';

class DragCell extends React.Component {
    render() {
        return (
            <td onDragOver={() => { DragCell.reorder(this.props.dataItem); }}>
                <span
                    className="k-icon k-i-reorder"
                    draggable="true"
                    style={{ cursor: "move" }}
                    onDragStart={(e) => {
                        DragCell.dragStart(this.props.dataItem);
                        e.dataTransfer.setData("dragging", "");
                    }}
                >
                </span>
            </td>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridData: products,
            activeItem: null
        };
        DragCell.reorder = this.reorder.bind(this);
        DragCell.dragStart = this.dragStart.bind(this);
    }

    reorder(dataItem) {
        if (this.state.activeItem === dataItem) {
            return;
        }
        let reorderedData = this.state.gridData.slice();
        let prevIndex = reorderedData.findIndex(p => (p === this.state.activeItem));
        let nextIndex = reorderedData.findIndex(p => (p === dataItem));
        reorderedData.splice(prevIndex, 1);
        reorderedData.splice(nextIndex, 0, this.state.activeItem);

        this.setState({
            gridData: reorderedData,
            active: this.state.activeItem
        });
    }

    dragStart(dataItem) {
        this.setState({
            gridData: this.state.gridData,
            activeItem: dataItem
        });
    }

    render() {
        return (
            <Grid
                style={{ height: '400px' }}
                data={this.state.gridData}
                reorderable
            >
                <Column title="" width="80px" cell={DragCell} />
                <Column field="ProductID" title="ID" width="60px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

