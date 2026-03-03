import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}
