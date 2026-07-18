import React, { ReactNode } from "react";
import Sidebar from "../fragments/Sidebar";
import Navbar from "../fragments/Navbar";

interface AdminProps {
  children: ReactNode;
}

const Admin: React.FC<AdminProps> = ({ children, ...props }) => {
  return (
    <>
      {/*  Sidebar */}
      <div className="h-screen flexc font-inter">
        <Sidebar />

        {/* Mainbar */}
        <div className="flex-[1] flexc flex-col !justify-start h-screen overflow-hidden">
          <Navbar />
          <div {...props}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
