"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, User, Image } from "@heroui/react";
import { Rating } from "@smastrom/react-rating";
import { Link } from "@heroui/link";

export default function Course() {
  const [currentPage, setCurrentPage] = useState(0);
  const [rating, setRating] = useState(3);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(list.length / itemsPerPage);
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
          <Card key={index} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-[#1fa6a6] text-base font-bold">Mobile</p>
              <small className="text-default-500">De Zéro à Expert : <br/> Maîtrisez le développement Cross-Platform</small>
              <h4 className="font-bold text-large">React Native</h4>
              <Rating style={{ right:5 , maxWidth: 150 }} value={rating} onChange={setRating} />
              <div className="flex flex-col items-start gap-2 mt-4">
                  <p className="text-sm"> With Mr : </p>
                  <div className="flex items-center">
                  <User
                      avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                      }}
                      description={
                      <Link isExternal href="https://x.com/jrgarciadev" size="sm">
                          @jrgarciadev
                      </Link>
                      }
                      name="Junior Garcia"
                  />
                  <div className="ml-12">
                      <p className="font-bold text-lg">$50.25</p>
                  </div>
                  </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-row items-center gap-3 mt-2">
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

      {/* Page counter */}
      <p className="text-sm text-gray-400">
        Page {currentPage + 1} of {totalPages}
      </p>
    </div>
  );
}