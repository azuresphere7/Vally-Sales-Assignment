"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { fadeLeftVariant } from "@/lib/animations";
import { SettingTab, settingTabs } from "@/lib/config";

export default function SettingsPage() {
  const [selectedSection, setSelectedSection] = React.useState(settingTabs[0].value);

  return (
    <main className="w-full py-8">
      <motion.h1
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeLeftVariant()}
        className="font-extrabold text-2xl md:text-4xl"
      >
        {"Settings"}
      </motion.h1>

      <div className="w-full overflow-x-auto my-8">
        <Tabs defaultValue={selectedSection}>
          {/* Select sections tab */}
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeLeftVariant()}
          >
            <TabsList className="flex justify-start w-full md:w-auto overflow-x-auto">
              {
                settingTabs.map((tab: SettingTab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.value}
                    className="w-1/3 md:w-32 mx-0.5 md:mx-0 py-1 md:py-2 text-[12px] md:text-xs"
                    onClick={() => setSelectedSection(tab.value)}
                  >
                    {tab.name}
                  </TabsTrigger>
                ))
              }
            </TabsList>
          </motion.div>

          {/* Display the selected section */}
          {
            settingTabs.map((tab: SettingTab) => (
              <TabsContent key={tab.id} value={tab.value}>
                {React.createElement(tab.section)}
              </TabsContent>
            ))
          }
        </Tabs>

      </div>
    </main>
  );
}