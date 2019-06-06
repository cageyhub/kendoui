import React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Input } from "@progress/kendo-react-inputs";
import { DatePicker } from '@progress/kendo-react-dateinputs';

export default class DialogContaincer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInEdit: this.props.dataItem || null
    };
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  onDialogInputChange = event => {
    let target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.props ? target.props.name : target.name;

    const edited = this.state.itemInEdit;
    edited[name] = value;

    this.setState({
      itemInEdit: edited
    });
  };

  render() {
    return (
      <Dialog onClose={this.props.cancel}>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Group
              <br />
              <Input
                type="text"
                name="group"
                value={this.state.itemInEdit.group || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Sub Group
              <br />
              <Input
                type="tetx"
                name="subGroup"
                value={this.state.itemInEdit.subGroup || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Group Name
              <br />
              <Input
                type="text"
                name="groupName"
                value={this.state.itemInEdit.groupName || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Start Date
              <br />
              <br />
              <DatePicker defaultValue={this.state.itemInEdit.startDate ? new Date(this.state.itemInEdit.startDate) : new Date()} />
            </label>
          </div>
          <div>
            <label>
              End Date
              <br />
              <br />
              <DatePicker defaultValue={this.state.itemInEdit.endDate ? new Date(this.state.itemInEdit.endDate) : new Date()}  />
            </label>
          </div>
        </form>
        <DialogActionsBar>
          <button className="k-button" onClick={this.props.cancel}>
            Cancel
          </button>
          <button className="k-button k-primary" onClick={this.props.save}>
            Save
          </button>
        </DialogActionsBar>
      </Dialog>
    );
  }
}
