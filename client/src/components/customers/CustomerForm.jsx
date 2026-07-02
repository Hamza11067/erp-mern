import { zodResolver } from "@hookform/resolvers/zod";
import customerSchema from "@/lib/validations/customer.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { createCustomer, updateCustomer } from "@/services/customer.service";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CustomerForm({ onSuccess, customer }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      cnic: "",
      openingBalance: 0,
      creditLimit: 0,
      status: true,
    },
  });

  useEffect(() => {
    if (customer) {
      reset({
        name: customer.name,
        phone: customer.phone,
        email: customer.email,
        address: customer.address,
        city: customer.city,
        cnic: customer.cnic,
        openingBalance: customer.opening_balance,
        creditLimit: customer.credit_limit,
        status: customer.status,
      });
    } else {
      reset({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        cnic: "",
        openingBalance: 0,
        creditLimit: 0,
        status: true,
      });
    }
  }, [customer, reset]);

  async function onSubmit(values) {
    try {
      if (customer) {
        await updateCustomer(customer.id, values);
        toast.success("Customer updated successfully");
      } else {
        await createCustomer(values);
        toast.success("Customer added successfully");
      }

      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Name */}
      <div>
        <Label htmlFor="name">Customer Name</Label>
        <Input
          id="name"
          placeholder="Ahmed Traders"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="03XXXXXXXXX"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="customer@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* City */}
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="Lahore"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      {/* Address */}
      <div className="md:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          placeholder="Main Bazar"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* CNIC */}
      <div>
        <Label htmlFor="cnic">CNIC</Label>
        <Input
          id="cnic"
          placeholder="35202-1234567-1"
          {...register("cnic")}
        />
        {errors.cnic && (
          <p className="text-red-500 text-sm mt-1">{errors.cnic.message}</p>
        )}
      </div>

      {/* Opening Balance */}
      <div>
        <Label htmlFor="openingBalance">Opening Balance</Label>
        <Input
          id="openingBalance"
          type="number"
          {...register("openingBalance")}
        />
        {errors.openingBalance && (
          <p className="text-red-500 text-sm mt-1">
            {errors.openingBalance.message}
          </p>
        )}
      </div>

      {/* Credit Limit */}
      <div>
        <Label htmlFor="creditLimit">Credit Limit</Label>
        <Input
          id="creditLimit"
          type="number"
          {...register("creditLimit")}
        />
        {errors.creditLimit && (
          <p className="text-red-500 text-sm mt-1">
            {errors.creditLimit.message}
          </p>
        )}
      </div>

      {/* Status */}
      <div>
        <Label>Status</Label>

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value ? "true" : "false"}
              onValueChange={(value) => field.onChange(value === "true")}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="md:col-span-2 flex justify-end">
        <Button type="submit">
          {customer ? "Update Customer" : "Save Customer"}
        </Button>
      </div>
    </form>
  );
}