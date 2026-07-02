import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CustomerForm from "./CustomerForm";

export default function CustomerDialog({
  open,
  setOpen,
  customer,
  refreshCustomers,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {customer ? "Edit Customer" : "Add Customer"}
          </DialogTitle>
        </DialogHeader>

        <CustomerForm
          customer={customer}
          onSuccess={() => {
            setOpen(false);
            refreshCustomers();
          }}
        />
      </DialogContent>
    </Dialog>
  );
}