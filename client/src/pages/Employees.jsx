import { useEffect, useState } from "react";
import EmployeeDialog from "@/components/employees/EmployeeDialog";
import EmployeeTable from "@/components/employees/EmployeeTable";
import DeleteEmployeeDialog from "@/components/employees/DeleteEmployeeDialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEmployees, deleteEmployee } from "@/services/employee.service";
import { toast } from "sonner";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleDeleteClick(employee) {
    setSelectedEmployee(employee);
    setDeleteOpen(true);
  }

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Employees</h1>

        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>

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
      </div>

      <EmployeeTable
        employees={employees}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />
    </div>
  );
}
