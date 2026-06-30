import EmployeeTable from "@/components/employees/EmployeeTable";
import AddEmployeeDialog from "@/components/employees/AddEmployeeDialog";

export default function Employees() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Employees</h1>

        <AddEmployeeDialog />
      </div>

      <EmployeeTable />
    </div>
  );
}
