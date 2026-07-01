import api from "@/api/axios";

export const getEmployees = async () => {
  const response = await api.get("/employees");
  return response.data;
};

export async function createEmployee(employeeData) {
  const response = await api.post("/employees", employeeData);

  return response.data;
}

export async function updateEmployee(id, data) {
  const response = await api.put(`/employees/${id}`, data);
  return response.data;
}

export async function deleteEmployee(id) {
  const { data } = await api.delete(`/employees/${id}`);
  return data;
}