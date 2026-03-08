"use client";;
import { recommendation } from "@/utils/functions";
import React, { useRef, useState } from "react";
export default function UploadCV() {
  const [fileName, setFileName] = useState("Upload CV");
  const [fileURL, setFileURL] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files && files[0] && fileInputRef.current) {
      fileInputRef.current.files = files;
      setFileName(files[0].name);
      setFileURL(URL.createObjectURL(files[0]));
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      recommendation(file, "")
      setFileName(file.name);
    }
  };
  return (      
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="flex flex-row justify-center items-center gap-2 rounded-2xl border-1 border-dashed border-[#1fa6a6] w-xl h-32 lg:w-4xl px-4 py-2 hover:bg-[#1fa6a6]/5 mb-6 cursor-pointer">
      <input onChange={handleFileChange} ref={fileInputRef} type="file" className="hidden" id="cv-upload" />
      <label htmlFor="cv-upload" className="cursor-pointer">
        {
        fileName === "Upload CV" ? 
          <p className="text-[#1fa6a6] font-bold text-xl hover:underline">{fileName}</p>
          : 
          <a target="_blank" href={fileURL} className="text-[#1fa6a6] font-bold text-xl underline">{fileName}</a>
        }
      </label>
    </div>
  );
}
