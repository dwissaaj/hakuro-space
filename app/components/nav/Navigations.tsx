'use client'
import MdSubMenuAccount from "@/app/components/nav/medium/MdSubMenuAccount";
import MdSubMenuData from "@/app/components/nav/medium/MdSubMenuData";
import MdSubMenuDesign from "@/app/components/nav/medium/MdSubMenuDesign";
import MdSubMenuContact from "@/app/components/nav/medium/MdSubMenuContact";
import MenuBurger from "@/app/components/nav/MenuBurger";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarItem, } from "@nextui-org/react";
import {  useState } from "react";
import { HakuroLogo } from "@/app/components/brand/HakuroLogo";
import InputUI from "@/app/components/input/Input";
import { SixThemeSwitcher } from "../sixThemeSwitcher";
import Link from "next/link";
export default function Navigations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <Navbar maxWidth="2xl" isBordered className="py-4" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <div className="hidden md:flex  space-x-4">
          <HakuroLogo  />
          </div>
          <div>
            <Link href={"/"} className="font-bold text-inherit">HAKURO</Link>
          </div>
          
      
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:flex gap-4 " justify="center">
        <NavbarItem>
          <InputUI />
        </NavbarItem>
        <div className="hidden md:flex gap-3">
        
        <NavbarItem>
          <MdSubMenuDesign />
        </NavbarItem>
        <NavbarItem>
          <MdSubMenuContact />
        </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <SixThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <MdSubMenuAccount />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <MdSubMenuData />
        </NavbarItem>

      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
        <MenuBurger />
        </NavbarMenuItem>
      </NavbarMenu>
     
    </Navbar>
  );
}
