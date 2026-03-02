"use client";
import { Button, Form, Input } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue> | null>(null);
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data as Record<string, FormDataEntryValue>);
  };


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

        {/* Right Side - Form */}
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-white rounded-tr-3xl rounded-br-3xl">
          <h2 className="text-[#0d4f4f] font-extrabold text-2xl mb-6">Login</h2>
          <Form className="w-full flex flex-col gap-5" onSubmit={onSubmit}>
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="inside"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onValueChange={setEmail}
            />
            <Input
              isRequired
              errorMessage="Please enter a valid password"
              label="Password"
              labelPlacement="inside"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onValueChange={setPassword}
            />
            <Button
              type="submit"
              className="self-center bg-[#0d4f4f] hover:bg-[#1fa6a6] text-white font-bold px-6 py-2 rounded-xl transition-colors duration-300"
            >
              Sign In
            </Button>

            {submitted && (
              <div className="text-sm text-gray-200 mt-3 break-words">
                You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}