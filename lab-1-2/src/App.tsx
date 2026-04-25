import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/layout";
import { RoleList } from "./components/RoleList";
import { EmployeeForm } from "./components/form";
import { Organisation } from "./components/organisation";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
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
                <RoleList />
                <EmployeeForm />
              </>} />

            <Route path="organization" element={<Organisation />} />
          </Route>
        </Routes>
      </BrowserRouter></>
  );
}

export default App;