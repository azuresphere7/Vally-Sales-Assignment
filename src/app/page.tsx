import React from "react";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import SettingsPage from "@/pages/SettingsPage";

export default function App() {
  return (
    <main className="md:container flex flex-col w-full px-4 md:px-0">
      <Navbar />
      <SettingsPage />
      <Footer />
    </main>
  );
}
