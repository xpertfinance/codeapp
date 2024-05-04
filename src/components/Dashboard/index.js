import React, { useState, useEffect } from "react";

import Header from "./Header";
import Table from "./Table";

import { collection, getDocs} from "firebase/firestore";
import { db } from "../../config/firestore";

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState();
  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const employees = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEmployees(employees);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container">
      <>
        <Header setIsAuthenticated={setIsAuthenticated} />
        <Table
          employees={employees}
        />
      </>
    </div>
  );
};

export default Dashboard;
