import { useFormInput } from "../components/userInput";
import { employeeService } from "../services/employeeService";
import { useAuth } from "@clerk/react";

export function EmployeeForm({ refresh }: { refresh: () => void }) {
  const firstName = useFormInput("");
  const department = useFormInput("");
  const { isSignedIn } = useAuth();

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
  if (!isSignedIn) {
    return (
      <div style={{ 
        padding: "20px", 
        border: "1px solid #ccc", 
        borderRadius: "8px",
        marginTop: "20px"
      }}>
        <p>Please sign in to add new employees.</p>
        <a href="/sign-in" style={{ color: "#0066cc" }}>Log in here</a>
      </div>
    );
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