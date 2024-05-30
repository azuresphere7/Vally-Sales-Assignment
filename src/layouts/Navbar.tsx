/**
 * The component represents the navigation bar of the application.
 * It includes a logo, navigation links, user profile dropdown, search input, and notification icons.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CaretDownIcon, BellIcon, ArchiveIcon, HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MenuConfig, navbarConfig, userMenuConfig } from "@/lib/config";

export default function Navbar() {
  // Manage search input visibility when the device goes to mobile
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  // Toggle search input visibility
  const toggleSearchOpen = (): void => setIsSearchOpen(!isSearchOpen);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center w-full py-4 md:py-6">
        {/* Menubar for mobile */}
        <div className="flex justify-between md:justify-start items-center w-full md:w-auto">
          {/* Logo and navigation menu */}
          <div className="flex items-center">
            {/* Sidebar menu trigger */}
            <Sheet>
              <SheetTrigger className="block lg:hidden">
                <HamburgerMenuIcon
                  width={18}
                  height={18}
                  className="text-gray-500 mr-2"
                />
              </SheetTrigger>

              <SheetContent>
                <SheetHeader className="p-4 font-bold text-left">Vally Sales Ince</SheetHeader>
                <SheetDescription>
                  {navbarConfig.map((item: MenuConfig) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      className="block w-full p-4 rounded-md transition-all duration-200 text-gray-500 hover:bg-secondary hover:text-black"
                    >
                      {item.name}
                    </Link>
                  ))}
                </SheetDescription>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/assets/logo.png"}
                width={48}
                height={44}
                className="w-10 h-10"
                unoptimized
                priority
              />
            </Link>
          </div>

          {/* User profile dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center p-1 ml-4 border-[1px] border-gray-400 rounded-full cursor-pointer">
                <div className="relative">
                  <Avatar className="w-8 h-8 md:w-10 md:h-10">
                    <AvatarImage alt="avatar" src="/assets/avatar.png" />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                  <span className="absolute right-0 bottom-0 w-[12px] h-[12px] rounded-full border-2 border-white bg-green-500" />
                </div>

                <h1 className="ml-3">Keshav</h1>
                <CaretDownIcon fontSize={80} className="mx-2" />
              </div>
            </PopoverTrigger>

            <PopoverContent>
              {userMenuConfig.map((item: MenuConfig) => (
                <Link key={item.id} href={item.path} className="flex items-center p-2 rounded-md transition-all duration-200 hover:bg-secondary">
                  {React.createElement(item.icon)}
                  <p className="ml-2 text-sm">{item.name}</p>
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        {/* Primary navigation menu */}
        <NavigationMenu className="hidden lg:flex items-center">
          <NavigationMenuList>
            {navbarConfig.map((item: MenuConfig) => (
              <NavigationMenuItem key={item.id}>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink className="flex justify-center items-center w-[110px] py-3 rounded-md transition-all duration-200 text-gray-500 hover:bg-secondary hover:text-black active:bg-white">
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Notification and search for desktop design */}
        <div className="hidden md:flex items-center">
          {/* Notification */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="mx-3">
                <BellIcon width={18} height={18} className="text-gray-500" />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-gray-400 text-sm">No Notifications</p>
            </PopoverContent>
          </Popover>

          {/* Archived inbox icon */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="mx-3">
                <ArchiveIcon width={18} height={18} className="text-gray-500" />
              </button>
            </PopoverTrigger>

            <PopoverContent>
              <p className="text-gray-400 text-sm">No Archived Inbox</p>
            </PopoverContent>
          </Popover>

          <Input
            placeholder="Search..."
            className="w-44 ml-4"
          />
        </div>

        {/* Search button for mobile */}
        <button className="block md:hidden" onClick={toggleSearchOpen}>
          <MagnifyingGlassIcon
            width={18}
            height={18}
            className="ml-2 text-gray-500"
          />
        </button>
      </div>

      {/* Search input for mobile */}
      {isSearchOpen && (
        <Input placeholder="Search..." className="block md:hidden" />
      )}
    </div>
  );
}
