"use client";

import { AppSidebar } from "@v1/ui/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@v1/ui/components/avatar";

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <main className="flex-1 p-8 flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-lg">Welcome to RetailJet!</p>
          <p className="text-sm text-gray-500">This is a simple test page to verify typography styles.</p>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="h2">Typography Test</h2>
            <p className="p">This is a paragraph of text.</p>
            <p className="small">This is smaller text.</p>
            <p className="large">This is larger text.</p>
            <ul className="list">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
