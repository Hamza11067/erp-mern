import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/services/employee.service";

export default function useEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
}