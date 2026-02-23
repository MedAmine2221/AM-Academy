"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, Avatar } from "@heroui/react";
import { Rating } from "@smastrom/react-rating";
import { FiGithub, FiLinkedin} from "react-icons/fi";
export default function Teacher() {
  const [currentPage, setCurrentPage] = useState(0);
  const [rating, setRating] = useState(3);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(list.length / itemsPerPage);

  // Get the 3 teachers for the current page
  const currentTeachers = list.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* 3 Cards Row */}
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {currentTeachers.map((index) => (
          <Card key={index} className="w-[250px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    LAZREG Mohamed Amine
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @teacher{index}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>Développeur Full Stack JS : 1 an d&apos;expérience</p>
              <div className="my-2">
                <Rating style={{ right:5 , maxWidth: 150 }} value={rating} onChange={setRating} />
              </div>
              <div className="flex flex-row items-center justify-center">
                <FiLinkedin color="737373" size={20} className="mr-2 my-4"/>
                <FiGithub color="#737373" size={20} className="ml-2 my-4"/>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <p className="text-sm text-gray-400">
        Page {currentPage + 1} of {totalPages}
      </p>
      <div className="flex flex-row items-center gap-3 mb-8">
        {/* Prev button */}
        <button
          onClick={prevPage}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-[#1fa6a6] text-[#1fa6a6] hover:bg-[#1fa6a6] hover:text-white transition-colors duration-200"
        >
          ‹
        </button>

        {/* Page indicators */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentPage
                ? "bg-[#1fa6a6]"
                : "bg-gray-300 hover:bg-[#1fa6a6]/50"
            }`}
          />
        ))}

        {/* Next button */}
        <button
          onClick={nextPage}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-[#1fa6a6] text-[#1fa6a6] hover:bg-[#1fa6a6] hover:text-white transition-colors duration-200"
        >
          ›
        </button>
      </div>
    </div>
  );
}