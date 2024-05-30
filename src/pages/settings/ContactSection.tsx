"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AutosizeTextarea } from "@/components/ui/autosize-textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectConfig, companySize, fundingRoundConfig } from "@/lib/config";
import { FormSchema } from "@/lib/validation";
import { fadeUpVariant } from "@/lib/animations";

export default function SettingsContactSection() {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [image, setImage] = React.useState("/assets/company.png");

  // Open file browsing dialog when click the button
  const handleImageSelect = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Remove company logo image when click the button
  const handleImageRemove = () => {
    form.setValue("imageURL", "");
    setImage("");
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      imageURL: "/assets/company.png",
      name: "Sixteen Inc",
      website: "https://sixteen.life/",
      linkedin: "https://www.linkedin.com/company/sixteenlife",
      industry: "Digital Wellbeing",
      count: companySize[0].value,
      description: "Redesign your digital life, reduce your screen time",
      goals: "Help everyone to be more conscious of where they are spending their time",
      headquarters: "Austin, TX, United States",
      round: fundingRoundConfig[0].value,
      faqs: "https://sixteen.life/faq"
    },
  });

  // Handle the form submit
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form className="w-full py-8" onSubmit={form.handleSubmit(onSubmit)}>
        <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant()}>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start w-full md:px-3">
            {/* Image input */}
            <div className="flex items-center mt-8 md:mt-0">
              <FormField
                control={form.control}
                name="imageURL"
                render={({ field }) => (
                  <>
                    <Avatar className="w-20 h-20 sm:w-28 sm:h-28">
                      <AvatarImage alt="avatar" src={image} />
                      <AvatarFallback className="text-4xl">C</AvatarFallback>
                    </Avatar>

                    <Input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          field.value = URL.createObjectURL(files[0]);
                          setImage(URL.createObjectURL(files[0]));
                        }
                      }}
                    />
                  </>
                )}
              />

              {/* Upload or remove images */}
              <div className="flex flex-col ml-2 sm:ml-8">
                <div className="flex justify-between sm:justify-start items-center w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-full md:w-auto text-xs md:text-sm"
                    onClick={handleImageRemove}
                  >
                    Remove
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="ml-2 sm:ml-4 shadow-md text-xs md:text-sm"
                    onClick={handleImageSelect}
                  >
                    Change Photo
                  </Button>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-gray-500">
                  {"or drag and drop (SVG, PNG, JPG)"}
                </p>
              </div>
            </div>

            <div className="flex justify-between md:justify-start w-full md:w-auto">
              <Button
                type="button"
                variant="outline"
                className="w-full md:w-auto mr-2 shadow-md"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="w-full md:w-auto ml-2"
              >
                Save Changes
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap mt-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>Company&apos;s Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>Company&apos;s Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>Company&apos;s Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>Company&apos;s Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Custom input component for company size */}
            <div className="mx-2 my-8">
              <h1 className="mb-4">Employeer Count</h1>

              <FormField
                control={form.control}
                name="count"
                render={({ field }) => (
                  <div className="flex items-center">
                    {
                      companySize.map((item: SelectConfig) => (
                        <div
                          key={item.id}
                          className={`px-2 md:px-4 py-1 md:py-2 mx-1 rounded-full border-[1px] border-black ${item.value === field.value ? "bg-black text-white" : "bg-white text-black"} text-xs md:text-base cursor-pointer transition-all duration-200`}
                          onClick={() => field.onChange({ target: { value: item.value } })}
                        >
                          {item.value}
                        </div>
                      ))
                    }
                  </div>
                )}
              >

              </FormField>
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>Company description</FormLabel>
                  <FormControl>
                    <AutosizeTextarea {...field} className="resize-none" />
                  </FormControl>
                  <FormDescription>
                    Your detailed company description
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem className="w-full px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>What are your company goals?</FormLabel>
                  <FormControl>
                    <AutosizeTextarea {...field} className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="headquarters"
              render={({ field }) => (
                <FormItem className="w-full px-0 md:px-3 my-2 md:my-4">
                  <FormLabel>Headquarters</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select component input */}
            <div className="flex flex-wrap items-center w-full my-4">
              <FormField
                control={form.control}
                name="round"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2 px-0 md:px-3 my-2 md:my-4">
                    <FormLabel>Headquarters</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={newValue => field.onChange({ target: { value: newValue } })}>
                        <SelectTrigger>
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {
                              fundingRoundConfig.map((item: SelectConfig) => (
                                <SelectItem key={item.id} value={item.value}>{item.value}</SelectItem>
                              ))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="faqs"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2 px-0 md:px-3">
                    <FormLabel>FAQs</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </motion.div>
      </form>
    </Form>
  );
}