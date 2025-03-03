"use client";

import { SidebarProvider } from "@v1/ui/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {children}
      </div>
    </SidebarProvider>
  );
}