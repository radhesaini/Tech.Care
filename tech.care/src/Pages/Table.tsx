import React from "react";
import "./table.css";
type Props = {
  tableData: any[];
};

const Table = (props: Props) => {
  return (
    <table className="table-auto table-Container">
      <thead className="table-Heading">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
