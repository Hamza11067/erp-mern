import { cn } from "@/lib/utils";

export default function DataGrid({
  columns,
  data,
  loading,
  emptyMessage = "No data found.",
  maxHeight = "100%",
}) {
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">Loading...</div>
    );
  }

  const templateColumns = columns
    .map((column) => column.width || "1fr")
    .join(" ");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm">
      <div
        className="custom-scrollbar flex-1 overflow-y-auto"
        style={{ maxHeight }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-20 grid border-b bg-slate-100 font-semibold"
          style={{ gridTemplateColumns: templateColumns }}
        >
          {columns.map((column) => (
            <div key={column.key} className="border-r p-3 last:border-r-0">
              {column.header}
            </div>
          ))}
        </div>

        {/* Empty */}
        {data.length === 0 && (
          <div className="p-10 text-center text-slate-500">{emptyMessage}</div>
        )}

        {/* Rows */}
        {data.map((row) => (
          <div
            key={row.id}
            className="grid items-center border-b hover:bg-slate-50"
            style={{ gridTemplateColumns: templateColumns }}
          >
            {columns.map((column) => (
              <div
                key={column.key}
                className={cn("border-r p-3 last:border-r-0", column.className)}
              >
                {column.render ? column.render(row) : row[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
