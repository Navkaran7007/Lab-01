export type Employee = {
  firstName: string;
  department: string;
};

let employees: Employee[] = [];

export const employeeRepo = {
  getEmployees() {
    return employees;
  },

  createEmployee(employee: Employee) {
    employees.push(employee);
    return employee;
  },
};