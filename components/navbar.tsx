"use client";
import { Navbar, NavbarContent, NavbarItem, Link } from "@heroui/react";
import Image from "next/image";

export default function NavBar() {
  return (
    <Navbar 
      className="px-6" 
      maxWidth="full"
      height="5rem"
    >
      <NavbarContent justify="start" className="flex items-center">
        <Image
          src="/logo.png"
          alt="AM Academy Logo"
          width={500}
          height={80}
          style={{ objectFit: "contain", height: "4rem", width: "auto" }}
          priority
          onClick={() => window.location.href = "/"}
        />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex gap-4 items-center">
        <NavbarItem isActive>
          <Link className="text-[#1fa6a6]" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">About us</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">Courses</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">Contact us</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">FAQ's</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/auth">Signin</Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="bg-[#1fa6a6] text-white px-4 py-2 rounded-xl"
            href="#"
          >
            Create free account
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}