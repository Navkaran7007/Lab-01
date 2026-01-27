import './App.css'
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { EmployeeList } from "./components/employeelist";
import { EmployeeForm } from "./components/form";
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState<string[]>([]);

  const addEmployee = (name: string) => {
    setEmployees([...employees, name]);
  };

  return (
    <>
      <Header />

      <main>
        <EmployeeList employees={employees} />
        <EmployeeForm addEmployee={addEmployee} />
      </main>

      <Footer />
    </>
  );
}

export default App;
