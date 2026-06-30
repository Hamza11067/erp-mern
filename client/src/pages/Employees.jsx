import EmployeeTable from "@/components/employees/EmployeeTable";

export default function Employees() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Employees</h1>
        <p className="text-slate-500">
          Manage all employees in your organization.
        </p>
      </div>

      <EmployeeTable />
    </div>
  );
}
