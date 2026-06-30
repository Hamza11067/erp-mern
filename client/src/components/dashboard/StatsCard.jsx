import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
}) {
  return (
    <Card className="shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>

            <h2 className="mt-2 text-3xl font-bold">{value}</h2>

            <p className="mt-2 text-xs text-muted-foreground">{subtitle}</p>
          </div>

          <div className={`rounded-xl p-3 ${iconBg}`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
