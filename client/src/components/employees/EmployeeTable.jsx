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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
    <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow className="transition-colors hover:bg-slate-50">
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600 text-center">
              ID
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600">
              Full Name
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600">
              Email
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600">
              Phone
            </TableHead>
            <TableHead className="font-semibold uppercase tracking-wide text-slate-600">
              Department
            </TableHead>
            <TableHead className="text-right font-semibold uppercase tracking-wide text-slate-600">
              Salary
            </TableHead>
            <TableHead className="text-center font-semibold uppercase tracking-wide text-slate-600">
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
                <TableCell className="pl-4">{employee.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                        {employee.full_name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-semibold text-slate-800">
                        {employee.full_name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell className="text-slate-600">
                  {employee.phone || "-"}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    {employee.department ?? "N/A"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <span className="font-semibold text-emerald-600">
                    PKR {Number(employee.salary).toLocaleString()}
                  </span>
                </TableCell>
                <TableCell className="text-center space-x-2">
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
