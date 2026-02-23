import "@/styles/globals.css";
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
              />
          </div>
          <p className="text-white m-6">AM Academy – High-quality courses <br/> to boost your skills and grow your expertise</p>
        </div>
        <div className="flex flex-row justify-end pl-96">
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Product</p>
            <Link href={"/"} className="text-white mr-10 mt-2">Overview</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Features</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Solutions</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Tutorials</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Pricing</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Company</p>
            <Link href={"/"} className="text-white mr-10 mt-2">About us</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Careers</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">News</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Social</p>
            <Link href={"/"} className="text-white mr-10 mt-2">Facebook</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Instagram</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">LinkedIn</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#f4b438] font-bold mr-10 mb-2 mt-6">Legal</p>
            <Link href={"/"} className="text-white mr-10 mt-2">Privacy Policy</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Terms of Service</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Cookie Policy</Link>
            <Link href={"/"} className="text-white mr-10 mt-2">Contact</Link>
          </div>
        </div>
      </div>
      <div className="ml-30 mt-6 mb-6">
        <p className="text-[#f4b438]">© 2026 Ed-Circle. All rights reserved.</p>
      </div>
    </footer>
  );
}
