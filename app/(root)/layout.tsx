import React, { FC } from "react";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/navbar/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="relative">
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col">
          <Navbar />
          <div className="mx-auto mt-5 w-full">{children}</div>
        </section>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
