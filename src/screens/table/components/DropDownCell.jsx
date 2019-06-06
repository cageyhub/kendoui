import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const getStatus = feild => {
  switch (feild) {
    case "completed":
      return <span className="k-icon k-i-close k-i-x" style={{ color: "red" }} />;
    case "inprogress":
      return <span className="k-icon k-i-arrow-right" style={{ color: "blue" }} />;
    default:
      break;
  }
  return "";
};

export const DropDownCell = props => {
  const localizedData = [
    { text: "completed", value: "completed" },
    { text: "inprogress", value: "inprogress" },
    { text: "todo", value: "todo" }
  ];

  const handleChange = e => {
    props.onChange({
      dataItem: props.dataItem,
      field: props.field,
      syntheticEvent: e.syntheticEvent,
      value: e.target.value.value
    });
  };

  const dataValue = props.dataItem[props.field];

  if (!props.dataItem.inEdit) {
    return (
      <td>
        {/* {dataValue === null ? "" : props.dataItem[props.field].toString()} */}
        {getStatus(props.dataItem[props.field])}
      </td>
    );
  }

  return (
    <td>
      <DropDownList
        style={{ width: "100px" }}
        onChange={handleChange}
        value={localizedData.find(c => c.value === dataValue)}
        data={localizedData}
        textField="text"
      />
    </td>
  );
};
