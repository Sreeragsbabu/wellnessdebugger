import React from "react";
import Sidebar from "../component/commmon/Sidebar";
import TopHeader from "../component/commmon/TopHeader";

export default function MainLayout({ children }) {
  return (
    <div className="d-flex">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex-grow-1">
        <TopHeader />

        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
