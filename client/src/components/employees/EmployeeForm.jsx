import { zodResolver } from "@hookform/resolvers/zod";
import employeeSchema from "@/lib/validations/employee.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { createEmployee, updateEmployee } from "@/services/employee.service";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EmployeeForm({ onSuccess, employee }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      departmentId: "",
      designation: "",
      salary: "",
    },
  });

  useEffect(() => {
    console.log(employee);
    if (employee) {
      reset({
        fullName: employee.fullName,
        email: employee.email,
        phone: employee.phone,
        departmentId: String(employee.departmentId),
        designation: employee.designation,
        salary: String(employee.salary),
      });
    } else {
      reset({
        fullName: "",
        email: "",
        phone: "",
        departmentId: "",
        designation: "",
        salary: "",
      });
    }
  }, [employee, reset]);

  async function onSubmit(values) {
    try {
      if (employee) {
        await updateEmployee(employee.id, values);

        toast.success("Employee updated successfully");
      } else {
        await createEmployee(values);

        toast.success("Employee added successfully");
      }

      onSuccess?.();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Full Name */}
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          placeholder="Enter full name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="03XXXXXXXXX" {...register("phone")} />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Department */}
      <div>
        <Label>Department</Label>

        <Controller
          name="departmentId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="1">IT</SelectItem>
                <SelectItem value="2">Sales</SelectItem>
                <SelectItem value="3">Transport</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {errors.departmentId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.departmentId.message}
          </p>
        )}
      </div>

      {/* Designation */}
      <div>
        <Label htmlFor="designation">Designation</Label>
        <Input
          id="designation"
          placeholder="Software Engineer"
          {...register("designation")}
        />
        {errors.designation && (
          <p className="text-red-500 text-sm mt-1">
            {errors.designation.message}
          </p>
        )}
      </div>

      {/* Salary */}
      <div>
        <Label htmlFor="salary">Salary</Label>
        <Input
          id="salary"
          type="number"
          placeholder="50000"
          {...register("salary")}
        />
        {errors.salary && (
          <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
        )}
      </div>

      <div className="md:col-span-2 flex justify-end">
        <Button type="submit">
          {employee ? "Update Employee" : "Save Employee"}
        </Button>
      </div>
    </form>
  );
}
