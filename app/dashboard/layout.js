// app/dashboard/layout.js
import React from "react";
import Sidebar from "./_components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-64 h-screen fixed">
        <Sidebar />
      </div>
      <main className="ml-64 flex-1">{children}</main>
    </div>
  );
}

export default DashboardLayout;
