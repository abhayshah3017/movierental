import React from 'react'
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
    const {columns, sortColumn, items, onSort} = props;
    return ( 
        <table
        className="table m-2"
        style={{ color: "dark", fontWeight: "bold" }}
      >
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          items={items}
          columns={columns}
        />
      </table>
     );
}
 
export default Table;