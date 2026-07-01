import { useEffect, useState } from "react";
import EmployeeDialog from "@/components/employees/EmployeeDialog";
import EmployeeTable from "@/components/employees/EmployeeTable";
import { getEmployees } from "@/services/employee.service";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
      </div>

      <EmployeeTable
        employees={employees}
        loading={loading}
        onEdit={handleEdit}
      />
    </div>
  );
}
