import React from "react";

const Table = ({ employees }) => {
  return (
    <div className="contain-table">
      <table className="table-responsive">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee, i) => (
              <tr key={i}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
