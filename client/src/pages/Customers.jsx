import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import CustomerDialog from "@/components/customers/CustomerDialog";
import CustomerTable from "@/components/customers/CustomerTable";

import {
  getCustomers,
  deleteCustomer,
} from "@/services/customer.service";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const data = await getCustomers();

      setCustomers(data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to fetch customers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAdd = () => {
    setSelectedCustomer(null);
    setOpen(true);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this customer?")) return;

    try {
      await deleteCustomer(id);

      toast.success("Customer deleted successfully.");

      fetchCustomers();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete customer.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customers</h1>

        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <CustomerTable
        customers={customers}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CustomerDialog
        open={open}
        setOpen={setOpen}
        customer={selectedCustomer}
        refreshCustomers={fetchCustomers}
      />
    </div>
  );
}