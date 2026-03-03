import { roleRepo } from "../repository/role";
import { organisationData } from "../data/organisationData";
import type { Person } from "../types/person";

export const roleService = {
  createPerson(firstName: string, lastName: string, role: string):
    | { success: false; error: string }
    | { success: true; person: Person } {

    if (firstName.length < 3) {
      return { success: false, error: "First Name must be at least 3 characters." };
    }
    if (role.length < 1) {
      return { success: false, error: "Role is required." };
    }
    const existingRole = organisationData.find(
      (item) => item.role === role
    );
    if (existingRole) {
      return { success: false, error: "A person already exists for this role." };
    }

    const person = roleRepo.createPerson({
      firstName,
      lastName,
      role,
    });

    return { success: true, person };
  },
};
