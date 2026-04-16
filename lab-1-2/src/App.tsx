import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { employeeRepo } from "./repository/employee";
import type { Employee } from "./repository/employee";

import { Layout } from "./components/layout";
import { EmployeeList } from "./components/employeelist";
import { EmployeeForm } from "./components/form";
import { Organisation } from "./components/organisation";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  function loadEmployees() {
    setEmployees(employeeRepo.getEmployees());
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <><>
      <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </><BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/employees" />} />

            <Route
              path="employees"
              element={<>
                <EmployeeList employees={employees} />
                <EmployeeForm refresh={loadEmployees} />
              </>} />

            <Route path="organization" element={<Organisation />} />
          </Route>
        </Routes>
      </BrowserRouter></>
  );
}

export default App;