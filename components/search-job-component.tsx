"use client;";
import { Input } from "@heroui/input";
import { useRouter } from "next/navigation";

export default function SearchJobComponent() {
  const router = useRouter()
  return (
    <Input
      className="max-w-2xl"
      classNames={{ inputWrapper: "border-2 border-black h-15" }}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="bg-cyan-500 text-white font-bold rounded-2xl w-sm h-10"
          type="button"
          onClick={()=>router.push("/find-job")}
        >
          Match jobs with CV
        </button>
      }
      placeholder="Enter your skills"
      variant="bordered"
    />
  );
}

