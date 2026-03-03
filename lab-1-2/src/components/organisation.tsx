import { organisationData } from "../data/organisationData";
import { roleRepo } from "../repository/role";
import { RoleForm } from "./roleForm";
import { useState, useEffect } from "react";

export function Organisation() {
  const [people, setPeople] = useState(roleRepo.getPeople());

  function refreshPeople() {
    setPeople(roleRepo.getPeople());
  }

  useEffect(() => {
    refreshPeople();
  }, []);

  const allRoles = [...organisationData, ...people];

  return (
    <>
      <h2>Organization</h2>

      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {allRoles.map((item, index) => (
            <tr key={index}>
              <td>{item.role}</td>
              <td>
                {"name" in item
                  ? item.name
                  : `${item.firstName} ${item.lastName}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <RoleForm refresh={refreshPeople} />
    </>
  );
}
