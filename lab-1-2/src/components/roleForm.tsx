import { useFormInput } from "../components/userInput";
import { roleService } from "../services/roleService";

export function RoleForm({ refresh }: { refresh: () => void }) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    firstName.setError("");
    lastName.setError("");
    role.setError("");

    const result = roleService.createPerson(
      firstName.value,
      lastName.value,
      role.value
    );

    if (!result.success) {
      if (result.error?.includes("First Name")) {
        firstName.setError(result.error);
      } else if (result.error?.includes("Last Name")) {
        lastName.setError(result.error);
      } else if (result.error?.includes("Role")) {
        role.setError(result.error);
      } else {
        firstName.setError(result.error);
      }
      return;
    }

    firstName.setValue("");
    lastName.setValue("");
    role.setValue("");
    refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Role</h3>
      <input
        value={firstName.value}
        onChange={firstName.onChange}
        placeholder="First Name"
      />
      {firstName.error && <p>{firstName.error}</p>}

      <input
        value={lastName.value}
        onChange={lastName.onChange}
        placeholder="Last Name"
      />
      {lastName.error && <p>{lastName.error}</p>}

      <input
        value={role.value}
        onChange={role.onChange}
        placeholder="Role"
      />
      {role.error && <p>{role.error}</p>}

      <button type="submit">Add Person</button>
    </form>
  );
}
