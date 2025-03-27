import API from "./api";

// ✅ Define User Type
export interface User {
  id: number;
  name: string;
  email: string;
}

// ✅ Fetch Users Function
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const { data } = await API.get<User[]>("/users");
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// ✅ Fetch a Single User by ID
export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const { data } = await API.get<User>(`/users/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
};
