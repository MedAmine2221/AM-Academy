"use client";;
import JobCard from "@/components/job-card";
import { Pagination } from "@heroui/react";

export default function FindJobs() {
  return (
    <section>
        <div className="grid grid-cols-4">
            {
                [1,2,3,4,5,6,7,8,9,10].map((n: number)=> (
                    <JobCard key={n}/>
                ))
            }
        </div>
        <div className="flex justify-center">
            <Pagination         
                classNames={{
                    cursor: "bg-cyan-600 text-white"
                }}
                showControls initialPage={1} total={650} size="lg" 
            />
        </div>
    </section>
  );
}
