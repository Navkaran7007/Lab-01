import { employeeRepo } from "../repository/employee";
import { organisationData } from "../data/organisationData";
import type { Employee } from "../repository/employee";

export const employeeService = {
  createEmployee( firstName: string, department: string ):
    | { success: false; error: string }
    | { success: true; employee: Employee } {

    if (firstName.length < 3) {
      return { success: false, error: "First Name must be at least 3 characters." };
    }


    const exists = organisationData.find(
      (item) => item.role === department
    );

    if (!exists) {
      return { success: false, error: "Department does not exist." };
    }

    const employee = employeeRepo.createEmployee({
      firstName,
      department,
    });

    return { success: true, employee };
  },
};