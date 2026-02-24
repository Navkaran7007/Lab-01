import type { Employee } from "../repository/employee";

type EmployeesProps = {
  employees: Employee[];
};

export function EmployeeList({ employees }: EmployeesProps) {
  return (
    <>
      <h2>Employees</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} - {emp.department}
          </li>
        ))}
      </ul>
    </>
  );
}