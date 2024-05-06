import React, { useState, useEffect, useMemo } from "react";
import Header from "./Header";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../config/firestore";

const Dashboard = ({ setIsAuthenticated }) => {
  // State to store employees data
  const [employees, setEmployees] = useState([]);

  // Function to fetch employees data from Firestore
  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const employeesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEmployees(employeesData);
  };

  // Fetch employees data on component mount
  useEffect(() => {
    getEmployees();
  }, []);

  // Define columns memoized to avoid unnecessary re-renders
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

  // Initialize MaterialReactTable hook with columns and employees data
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
