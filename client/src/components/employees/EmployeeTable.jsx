import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function EmployeeTable({
  employees,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return <div className="rounded-xl bg-white p-6">Loading employees...</div>;
  }

  return (
    <div className="rounded-md border bg-white shadow-sm">
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
                <TableCell>{employee.department ?? "-"}</TableCell>
                <TableCell className="text-right">
                  Rs. {Number(employee.salary).toLocaleString()}
                </TableCell>
                <TableCell className="text-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(employee)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(employee)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
