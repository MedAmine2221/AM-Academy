"use client";;
import AuthForm from "@/components/auth/authForm";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { FiHome } from "react-icons/fi"
export default function Auth() {
  const [index, setIndex] = useState(0);
  const items = [
    "/logo-mobile-footer.png",
    "/BI.png",
    "/cooking.png",
    "/data-analytics.png",
    "/devops.png",
    "/reparation.png",
    "/robotics.png",
    "/flutter.png",
    "/ui-ux.jpeg",
  ];
  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prev)=>(prev + 1) % items.length);
    }, 3000);
    return ()=> clearInterval(interval);
  },[]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 bg-gradient-to-br from-[#0d4f4f] to-[#1fa6a6] flex flex-col items-center justify-center p-8 relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <AnimatePresence mode= "wait">
            <motion.div
              key={index}
              initial = {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              exit = {{ opacity: 0 }}
              transition = {{ duration: 1 }}
            >
              <Image
                src={items[index]}
                alt="AM Academy Logo"
                width={200}
                height={200}
                priority
              />
            </motion.div>
          </AnimatePresence>

          <p className="text-white mt-6 text-center text-lg md:text-xl font-medium">
            AM Academy – High-quality courses <br /> to boost your skills and grow your expertise
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-white rounded-tr-3xl rounded-br-3xl">
          <FiHome onClick={() => {window.location.href = "/"}} size={25} className="mb-4 text-gray-400" />
          <h2 className="text-[#0d4f4f] font-extrabold text-2xl mb-6">Login</h2>
          <AuthForm />
          <div className="flex items-center w-full justify-center gap-2 mt-4 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors duration-300">
            <FcGoogle size={25} />
            <span className="text-gray-500 ml-2">Sign in with Google</span>
          </div>
          <p className="mt-6 text-gray-500">Don't have an account? <a href="#" className="text-[#0d4f4f] font-bold hover:text-[#1fa6a6] underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}