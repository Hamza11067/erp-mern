import { useEffect, useState } from "react";
import EmployeeDialog from "@/components/employees/EmployeeDialog";
import EmployeeTable from "@/components/employees/EmployeeTable";
import DeleteEmployeeDialog from "@/components/employees/DeleteEmployeeDialog";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEmployees, deleteEmployee } from "@/services/employee.service";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleDeleteClick(employee) {
    setSelectedEmployee(employee);
    setDeleteOpen(true);
  }

  useEffect(() => {
    loadEmployees();
  }, [search]);

  async function loadEmployees() {
    try {
      const data = await getEmployees(search);

      if (data.success) {
        setEmployees(data.employees);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleAdd() {
    setSelectedEmployee(null);
    setOpen(true);
  }

  function handleEdit(employee) {
    setSelectedEmployee(employee);
    setOpen(true);
  }

  async function handleDelete() {
    try {
      await deleteEmployee(selectedEmployee.id);

      toast.success("Employee deleted successfully");

      setDeleteOpen(false);
      setSelectedEmployee(null);

      loadEmployees();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete employee");
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col space-y-6">
      <h1 className="text-3xl font-bold">Employees</h1>

      <div className="flex items-center justify-between gap-4">

        <div className="relative hidden md:block w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white"
          />
        </div>

        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <EmployeeDialog
        open={open}
        onOpenChange={setOpen}
        employee={selectedEmployee}
        onSuccess={loadEmployees}
      />

      <DeleteEmployeeDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        employee={selectedEmployee}
        onConfirm={handleDelete}
      />

      <EmployeeTable
        employees={employees}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />
    </div>
  );
}
