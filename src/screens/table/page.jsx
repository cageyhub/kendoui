import * as React from "react";
// import { Table1 } from "./components/table1";
import { Table2 } from "./components/table2";
import { Table3 } from "./components/table3";
import { Table4 } from "./components/table4";
export const Page = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex', width: '17%'}}>

      </div>
      <div style={{display: 'flex', flexDirection: 'column' , width: '83%'}}>
      {/* <Table1 /> */}
      {/* <br />
      <br />
      <br /> */}
      <Table4/>
      <br />
      <br />
      <br />      
      <Table3/>
      <br />
      <br />
      <br />
      <Table2/>
      <br />
      <br />
      <br />
      </div>
    </div>
  );
};
