"use client";
import "@/styles/globals.css";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#0d4f4f] flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-start">
          <div className="m-6">
            <Image
              src="/logo-mobile-footer.png"
              alt="AM Academy Logo"
              width={80}
              height={60}
              priority
              onClick={() => window.location.href = "/"}
            />   
          </div>
          <p className="text-white m-6">AM Academy – High-quality courses <br/> to boost your skills and grow your expertise</p>
        </div>
        <div className="flex flex-row justify-end pl-96">
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Product</p>
            <Link href={"/overview"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Overview</Link>
            <Link href={"/features"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Features</Link>
            <Link href={"/"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Solutions</Link>
            <Link href={"/tutorial"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Tutorials</Link>
            <Link href={"/pricing"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Pricing</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Company</p>
            <Link href={"/about-us"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">About us</Link>
            <Link href={"/career"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Careers</Link>
            <Link href={"/news"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">News</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Social</p>
            <a href={"https://www.facebook.com/mouhamed.amine.lazreg/"} target="_blank" className="text-white mr-10 mt-2 hover:text-[#f4b438]">Facebook</a>
            <a href={"https://www.instagram.com/mouhamedaminelz/"} target="_blank" className="text-white mr-10 mt-2 hover:text-[#f4b438]">Instagram</a>
            <a href={"https://github.com/MedAmine2221/AM-Academy"} target="_blank" className="text-white mr-10 mt-2 hover:text-[#f4b438]">LinkedIn</a>
          </div>
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Legal</p>
            <Link href={"/"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Privacy Policy</Link>
            <Link href={"/"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Terms of Service</Link>
            <Link href={"/"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Cookie Policy</Link>
            <Link href={"/contact"} className="text-white mr-10 mt-2 hover:text-[#f4b438]">Contact</Link>
          </div>
        </div>
      </div>
      <div className="ml-30 mt-6 mb-6">
        <p className="text-[#f4b438]">© 2026 Ed-Circle. All rights reserved. <br /> Developed By <a href={"https://www.linkedin.com/in/mohamed-amine-lazreg-831b1817a/"} target="_blank" className="hover:text-[#f4b438]">Mouhamed Amine Lazreg</a></p>
      </div>
    </footer>
  );
}
