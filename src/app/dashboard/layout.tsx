import { Sidebar } from "@/components/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] gap-6 p-0">
      <div className="hidden w-64 shrink-0 md:block">
        <div className="h-full">
          <Sidebar />
        </div>
      </div>
      <main className="flex-1">
        <div className="h-full p-6">{children}</div>
      </main>
    </div>
  );
}
