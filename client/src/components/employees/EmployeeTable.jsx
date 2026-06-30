import { useEffect, useState } from "react";
import { getEmployees } from "@/services/employee.service";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();

      if (data.success) {
        setEmployees(data.employees);
      }
    } catch (error) {
      console.error("Failed to load employees:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="rounded-xl bg-white p-6">Loading employees...</div>;
  }

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead className="text-right">Salary</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                No employees found.
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell className="font-medium">
                  {employee.full_name}
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>
                  {employee.department ?? "-"}
                </TableCell>
                <TableCell className="text-right">
                  Rs. {Number(employee.salary).toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  Edit | Delete
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}