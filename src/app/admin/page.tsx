import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminLogin from "@/components/AdminLogin";

export default async function AdminPage() {
  if (await isAuthenticated()) {
    redirect("/admin/dashboard");
  }
  return <AdminLogin />;
}
