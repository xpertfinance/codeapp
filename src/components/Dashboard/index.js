import React, { useState, useEffect, useMemo } from "react";
import Header from "./Header";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../config/firestore";

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const employeesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEmployees(employeesData);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName', 
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 150,
      },
      {
        accessorKey: 'jobTitle',
        header: 'Job Title',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: employees,
  });

  return (
   
      <>
        <Header setIsAuthenticated={setIsAuthenticated} />
        <h1>Welcome to the Employee Dashboard!</h1>
        <MaterialReactTable table={table} />
      </>
   
  );
};

export default Dashboard;