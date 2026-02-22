"use client";

import Course from "@/components/coursesCard";
import Teacher from "@/components/teachersCard";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="my-12 flex flex-col items-center gap-8 md:flex-row">
        <div>
          <p className="text-xl text-center md:text-left">
            Welcome to <span className="font-bold text-[#1fa6a6]">AM Academy</span>, your gateway to a world of knowledge and learning. 
            We are dedicated to providing high-quality educational resources and courses to help you achieve your academic and professional goals. 
            Whether you're a <span className="font-bold text-[#1fa6a6]">student</span> looking to <span className="font-bold text-[#1fa6a6]">enhance your skills</span> or a <span className="font-bold text-[#1fa6a6]">professional seeking</span> to <span className="font-bold text-[#1fa6a6]">expand your expertise</span>, 
            <span className="font-bold text-[#1fa6a6]"> AM Academy</span> has something for everyone. 
            Join us on this exciting journey of discovery and growth!
          </p>
          <div className="flex flex-row m-4">
            <div className="flex flex-col hover:text-[#1fa6a6] transition-colors duration-300 m-4 justify-center items-center">
              <p className="text-5xl font-bold text-center md:text-left">+50</p>
              <p className="text-3xl text-center ml-4 md:text-left">Teacher</p>
            </div>
            <div className="flex flex-col hover:text-[#1fa6a6] transition-colors duration-300 m-4 justify-center items-center">
              <p className="text-5xl font-bold text-center md:text-left">+100</p>
              <p className="text-3xl text-center ml-4 md:text-left">Courses</p>
            </div>
            <div className="flex hover:text-[#1fa6a6] transition-colors duration-300 flex-col m-4 justify-center items-center">
              <p className="text-5xl font-bold text-center md:text-left">+2K</p>
              <p className="text-3xl text-center ml-4 md:text-left">Students</p>
            </div>
          </div>
        </div>
        <Image
          src="/e-learning.png"
          alt=""
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-[#1fa6a6] mb-6">Our Courses</p>
        <Course/>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-[#1fa6a6] mb-6">Our Teachers</p>
        <Teacher/>
      </div>
    </section>
  );
}
