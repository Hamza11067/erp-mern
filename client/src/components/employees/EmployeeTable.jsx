import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";

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
    <div className="max-h-150 overflow-auto rounded-md border border-slate-200 bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-slate-100">
          <TableRow className="transition-colors hover:bg-slate-50">
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600 text-center border border-slate-300 bg-slate-100">
              ID
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600 border border-slate-300 bg-slate-100">
              Full Name
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600 border border-slate-300 bg-slate-100">
              Email
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600 border border-slate-300 bg-slate-100">
              Phone
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600 border border-slate-300 bg-slate-100">
              Department
            </TableHead>
            <TableHead className="text-right font-semibold uppercase tracking-wide text-slate-600 border border-slate-300 bg-slate-100">
              Salary
            </TableHead>
            <TableHead className="text-center font-semibold uppercase tracking-wide text-slate-600 border border-slate-300 bg-slate-100">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.length === 0 ? (
            <TableRow className="transition-colors hover:bg-slate-50">
              <TableCell colSpan={6} className="text-center py-8">
                No employees found.
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow
                key={employee.id}
                className="transition-colors hover:bg-slate-50"
              >
                <TableCell className="pl-4 border border-slate-200">
                  {employee.id}
                </TableCell>
                <TableCell className="font-medium text-slate-800 border border-slate-200">
                  {employee.full_name}
                </TableCell>
                <TableCell className="border border-slate-200">
                  {employee.email}
                </TableCell>
                <TableCell className="text-slate-600 border border-slate-200">
                  {employee.phone || "-"}
                </TableCell>
                <TableCell className="border border-slate-200">
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    {employee.department ?? "N/A"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right border border-slate-200">
                  <span className="font-semibold text-emerald-600">
                    PKR {Number(employee.salary).toLocaleString()}
                  </span>
                </TableCell>
                <TableCell className="text-center space-x-2 border border-slate-200">
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onEdit(employee)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:bg-red-50"
                      onClick={() => onDelete(employee)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
