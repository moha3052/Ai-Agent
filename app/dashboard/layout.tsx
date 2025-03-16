"use client";
import Header from "../../components/Header";
import { Authenticated } from "convex/react";
import { NavigationProvider } from "../../lib/NavigationProvider";
import { Sidebar } from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="flex h-screen">
        <Authenticated>
          
          {/* Your sidebar content here */}
          <Sidebar/>
        </Authenticated>

        <div className="flex-1">
          <main>
            <Header />
            {children}
          </main>
        </div>
      </div>
    </NavigationProvider>
  );
}
