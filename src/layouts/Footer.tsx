"use client";

import Link from "next/link";
import React from "react";
import { MenuConfig, footerConfig } from "@/lib/config";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full py-6">
      <h1>Vally Sales Inc</h1>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-full md:w-auto mt-4 md:mt-0">
        {
          footerConfig.map((item: MenuConfig) => (
            <Link key={item.id} href={item.path} className="p-3 rounded-md transition-all duration-200 whitespace-nowrap text-gray-500 hover:text-black">
              {item.name}
            </Link>
          ))
        }
      </div>
    </div>
  );
}