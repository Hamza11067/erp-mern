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
    return (
      <div className="rounded-lg border bg-white p-6">Loading employees...</div>
    );
  }

  const columns = "grid-cols-[70px_1.3fr_1.8fr_1.2fr_1fr_140px_120px]";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
      <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
        {/* Sticky Header */}
        <div
          className={`sticky top-0 z-20 grid ${columns} bg-slate-100 font-semibold border-b border-slate-300`}
        >
          <div className="border-r p-3 text-center">ID</div>
          <div className="border-r p-3">Full Name</div>
          <div className="border-r p-3">Email</div>
          <div className="border-r p-3">Phone</div>
          <div className="border-r p-3">Department</div>
          <div className="border-r p-3 text-right">Salary</div>
          <div className="p-3 text-center">Actions</div>
        </div>

        {/* Rows */}
        {employees.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            No employees found.
          </div>
        ) : (
          employees.map((employee) => (
            <div
              key={employee.id}
              className={`grid ${columns} items-center border-b border-slate-200 hover:bg-slate-50`}
            >
              <div className="border-r p-3 text-center">{employee.id}</div>

              <div className="border-r p-3 truncate font-medium">
                {employee.fullName}
              </div>

              <div className="border-r p-3 truncate">{employee.email}</div>

              <div className="border-r p-3">{employee.phone}</div>

              <div className="border-r p-3">
                <Badge variant="secondary">{employee.department}</Badge>
              </div>

              <div className="border-r p-3 text-right font-semibold text-emerald-600">
                PKR {Number(employee.salary).toLocaleString()}
              </div>

              <div className="flex justify-center gap-2 p-3">
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}
