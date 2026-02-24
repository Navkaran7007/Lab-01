import { useFormInput } from "../components/userInput";
import { employeeService } from "../services/employeeService";

export function EmployeeForm({ refresh }: { refresh: () => void }) {
  const firstName = useFormInput("");
  const department = useFormInput("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = employeeService.createEmployee(
      firstName.value,
      department.value
    );

    if (!result.success) {
      firstName.setError(result.error ?? "");
      return;
    }

    firstName.setValue("");
    department.setValue("");
    refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName.value}
        onChange={firstName.onChange}
        placeholder="First Name"
      />
      {firstName.error && <p>{firstName.error}</p>}

      <input
        value={department.value}
        onChange={department.onChange}
        placeholder="Department"
      />
      {department.error && <p>{department.error}</p>}

      <button type="submit">Add Employee</button>
    </form>
  );
}