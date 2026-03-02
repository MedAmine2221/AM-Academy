"use client";;
import { Button, Checkbox, Form, Input } from "@heroui/react";
import React, { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue> | null>(null);
  const [isSelected, setIsSelected] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data as Record<string, FormDataEntryValue>);
  };


  return (
    <Form className="w-full flex flex-col gap-5" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Please enter your last name"
        label="LastName"
        labelPlacement="inside"
        name="lastName"
        placeholder="Enter your last name"
        type="text"
        value={email}
        onValueChange={setEmail}
      />
      <Input
        isRequired
        errorMessage="Please enter your first name"
        label="FirstName"
        labelPlacement="inside"
        name="firstName"
        placeholder="Enter your first name"
        type="text"
        value={email}
        onValueChange={setEmail}
      />
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
      <Input
        isRequired
        errorMessage="Please confirm your password"
        label="Confirm Password"
        labelPlacement="inside"
        name="confirmPassword"
        placeholder="Confirm your password"
        type="password"
        value={password}
        onValueChange={setPassword}
      />
      <Button
        type="submit"
        className="self-center bg-[#0d4f4f] hover:bg-[#1fa6a6] text-white font-bold w-full rounded-xl transition-colors duration-300"
      >
        Register
      </Button>
      {submitted && (
        <div className="text-sm text-gray-200 mt-3 break-words">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}