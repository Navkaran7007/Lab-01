const API_BASE_URL = 'http://localhost:3000/api';

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface Role {
  id?: string;
  firstName: string;
  lastName: string;
  role: string;
}

export const apiService = {
  async getRoles(page: number = 1, limit: number = 10): Promise<PaginatedResponse<Role>> {
    const response = await fetch(`${API_BASE_URL}/roles?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': 'Bearer demo-token',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch roles');
    }

    return response.json();
  },

  async createRole(firstName: string, lastName: string, role: string): Promise<Role> {
    const response = await fetch(`${API_BASE_URL}/roles`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer demo-token',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, role }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create role');
    }

    return response.json();
  },
};
