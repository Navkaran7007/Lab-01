import { useState } from 'react';
import { useRoles } from '../hooks/useRoles';
import { useUser } from '@clerk/react';

export function RoleList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useRoles(page, 10);
  const { user } = useUser();

  if (isLoading) return <div>Loading roles...</div>;
  if (error) return <div>Error loading roles: {error.message}</div>;

  const { data: roles, pagination } = data!;

  return (
    <div>
      <h2>Roles</h2>
      <div className="role-grid">
        {roles.map((role, index) => (
          <div key={index} className="role-card">
            <h3>{role.firstName} {role.lastName}</h3>
            <p>Role: {role.role}</p>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        <button 
          disabled={!pagination.hasPrev}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>Page {pagination.page} of {pagination.totalPages}</span>
        <button 
          disabled={!pagination.hasNext}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
