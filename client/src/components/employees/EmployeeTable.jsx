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
      <div className="rounded-lg border border-slate-300 bg-white p-6 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        Loading employees...
      </div>
    );
  }

  const columns = "grid-cols-[70px_1.3fr_1.8fr_1.2fr_1fr_140px_120px]";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto">
        {/* Sticky Header */}
        <div
          className={`sticky top-0 z-20 grid ${columns} border-b border-slate-300 bg-slate-100 font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100`}
        >
          <div className="border-r border-slate-300 p-3 text-center dark:border-slate-700">
            ID
          </div>

          <div className="border-r border-slate-300 p-3 dark:border-slate-700">
            Full Name
          </div>

          <div className="border-r border-slate-300 p-3 dark:border-slate-700">
            Email
          </div>

          <div className="border-r border-slate-300 p-3 dark:border-slate-700">
            Phone
          </div>

          <div className="border-r border-slate-300 p-3 dark:border-slate-700">
            Department
          </div>

          <div className="border-r border-slate-300 p-3 text-right dark:border-slate-700">
            Salary
          </div>

          <div className="p-3 text-center">Actions</div>
        </div>

        {/* Rows */}
        {employees.length === 0 ? (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400">
            No employees found.
          </div>
        ) : (
          employees.map((employee) => (
            <div
              key={employee.id}
              className={`grid ${columns} items-center border-b border-slate-200 text-slate-900 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800/50`}
            >
              <div className="border-r border-slate-200 p-3 text-center dark:border-slate-700">
                {employee.id}
              </div>

              <div className="border-r border-slate-200 p-3 truncate font-medium dark:border-slate-700">
                {employee.fullName}
              </div>

              <div className="border-r border-slate-200 p-3 truncate dark:border-slate-700">
                {employee.email}
              </div>

              <div className="border-r border-slate-200 p-3 dark:border-slate-700">
                {employee.phone}
              </div>

              <div className="border-r border-slate-200 p-3 dark:border-slate-700">
                <Badge variant="secondary">{employee.department}</Badge>
              </div>

              <div className="border-r border-slate-200 p-3 text-right font-semibold text-emerald-600 dark:border-slate-700 dark:text-emerald-400">
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
                  className="text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
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