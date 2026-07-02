 import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";

export default function CustomerTable({
  customers,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="rounded-lg border bg-white p-6">
        Loading customers...
      </div>
    );
  }

  const columns = "grid-cols-[70px_1.6fr_1.2fr_1fr_160px_120px_120px]";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
      <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
        {/* Sticky Header */}
        <div
          className={`sticky top-0 z-20 grid ${columns} border-b border-slate-300 bg-slate-100 font-semibold`}
        >
          <div className="border-r p-3 text-center">ID</div>
          <div className="border-r p-3">Customer Name</div>
          <div className="border-r p-3">Phone</div>
          <div className="border-r p-3">City</div>
          <div className="border-r p-3 text-right">Opening Balance</div>
          <div className="border-r p-3 text-center">Status</div>
          <div className="p-3 text-center">Actions</div>
        </div>

        {/* Rows */}
        {customers.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            No customers found.
          </div>
        ) : (
          customers.map((customer) => (
            <div
              key={customer.id}
              className={`grid ${columns} items-center border-b border-slate-200 hover:bg-slate-50`}
            >
              <div className="border-r p-3 text-center">
                {customer.id}
              </div>

              <div className="border-r p-3 truncate font-medium">
                {customer.name}
              </div>

              <div className="border-r p-3">
                {customer.phone}
              </div>

              <div className="border-r p-3">
                {customer.city}
              </div>

              <div className="border-r p-3 text-right font-semibold text-emerald-600">
                PKR {Number(customer.openingBalance).toLocaleString()}
              </div>

              <div className="border-r p-3 flex justify-center">
                <Badge
                  variant={
                    customer.status === "Active"
                      ? "default"
                      : "destructive"
                  }
                >
                  {customer.status}
                </Badge>
              </div>

              <div className="flex justify-center gap-2 p-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onEdit(customer)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="text-red-500 hover:bg-red-50"
                  onClick={() => onDelete(customer.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}