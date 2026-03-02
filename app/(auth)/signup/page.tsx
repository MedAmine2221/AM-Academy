"use client";;
import SignupForm from "@/components/signup/signupForm";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
export default function SignUp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}    
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-white rounded-tr-3xl rounded-br-3xl">
          <FiHome onClick={() => {window.location.href = "/"}} size={25} className="mb-4 text-gray-400 hover:text-gray-600" />
          <h2 className="text-[#0d4f4f] font-extrabold text-2xl mb-6">Sign Up</h2>
          <SignupForm />
          <p className="mt-6 text-gray-500">Already have an account? <a href="/auth" className="text-[#0d4f4f] font-bold hover:text-[#1fa6a6] underline">Sign In</a></p>
        </div>
        <div className="md:w-1/2 bg-gradient-to-br from-[#0d4f4f] to-[#1fa6a6] flex flex-col items-center justify-center p-8 relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Image
              src={"/signup.png"}
              alt="AM Academy Logo"
              width={500}
              height={500}
              priority
            />
          </motion.div>
          <p className="text-white mt-6 text-center text-lg md:text-xl font-medium">
            AM Academy – High-quality courses <br /> to boost your skills and grow your expertise
          </p>
        </div>
      </div>
    </motion.div>
  );
}