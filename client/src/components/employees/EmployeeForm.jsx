import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import employeeSchema from "@/lib/validations/employee.schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function EmployeeForm() {
  const form = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Fields yahan aayengi */}

        <Button type="submit">Save Employee</Button>
      </form>
    </Form>
  );
}