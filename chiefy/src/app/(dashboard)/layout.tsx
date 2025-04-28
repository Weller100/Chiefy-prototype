import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar onClose={() => {}} />
      <div className="flex-1 ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
} 