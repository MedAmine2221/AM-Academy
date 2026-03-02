"use client";
import { Button, Form, Input, Textarea } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

export default function Tuto() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue> | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data as Record<string, FormDataEntryValue>);
  };
  return (
    <section className="flex flex-row items-center justify-center">
      <div className="my-12 flex flex-row items-center gap-8">
        <motion.div
          initial= {{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-row items-center gap-8"
        >
            <Form className="flex flex-row w-full border-2 border-neutral-300 rounded-2xl p-10 items-center" onSubmit={onSubmit}>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-row gap-4">
                      <Input
                        isRequired
                        label="LastName"
                        labelPlacement="outside"
                        name="lastName"
                        placeholder="Enter your last name"
                        type="text"
                        value={email}
                        onValueChange={setEmail}
                        />
                      <Input
                        isRequired
                        label="FirstName"
                        labelPlacement="outside"
                        name="firstName"
                        placeholder="Enter your first name"
                        type="text"
                        value={email}
                        onValueChange={setEmail}
                        />  
                  </div>
                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onValueChange={setEmail}
                    />
                  <Textarea
                    isRequired
                    label="Message"
                    labelPlacement="outside"
                    name="message"
                    placeholder="Enter your message"
                    type="text"
                    value={email}
                    onValueChange={setEmail}
                    />
                  <Button type="submit" className="bg-transparent text-[#1fa6a6] font-bold border-2 border-[#1fa6a6] px-4 py-2 rounded-xl">
                    Send Message
                  </Button>
                  {submitted && (
                    <div className="text-small text-default-500">
                      You submitted: <code>{JSON.stringify(submitted)}</code>
                    </div>
                  )}
              </div>
              <div className="flex flex-col gap-4 ml-8">
                <p className="text-default-700">32 rue 1er juin Kalaa Sghira, Sousse 4021 Tunisie</p>
                <a href="tel:+21653739484" className=" text-default-700 underline">+216 53 739 484</a>
                <a href="mailto:contact@amacademy.tn" className=" text-default-700">contact@amacademy.tn</a>
                <div className="flex flex-row gap-4 justify-center">
                  <FiYoutube className="text-default-500 hover:text-[#1fa6a6]" size={25} />
                  <FiFacebook className="text-default-500 hover:text-[#1fa6a6]" size={25} />
                  <FiInstagram className="text-default-500 hover:text-[#1fa6a6]" size={25} />
                </div>
              </div>
            </Form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/logo.png"
            alt=""
            width={600}
            height={600}
            priority
          />
        </motion.div>
      </div>

    </section>
  );
}