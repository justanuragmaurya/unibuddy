"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
// import Subjects from "@/lib/types/subjects"
// import axios from "axios"

export default function AddSubject() {
  const codeRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [sem, setSem] = useState(0);
  const [loading,setLoading] = useState(false);

  const handleSubmit = async () => {
    if (codeRef?.current?.value == "" || nameRef?.current?.value == "" || sem == 0) {
        return;
    }
    const data = {
        code: codeRef?.current?.value,
        name: nameRef?.current?.value,
        semester: sem
    }
    // const response = axios.post("/api/add-subject",data);
  }
  return (
    <div className="flex flex-col max-w-3xl m-auto mt-10 gap-5 p-5">
      <div>
        <h2 className="text-sm my-1">Enter the Subject Code</h2>
        <Input
          ref={codeRef}
          type="text"
          placeholder="Enter Subject Code"
          className=""
        />
      </div>
      <div>
        <h2 className="text-sm my-1">Enter the Subject Name</h2>
        <Input
          ref={nameRef}
          type="text"
          placeholder="Enter Subject Name"
          className=""
        />
      </div>
      <div>
        <h2 className="text-sm my-1">Chose the semester</h2>
        <Select
          onValueChange={(e) => {
            setSem(Number(e));
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1st Semester</SelectItem>
            <SelectItem value="2">2nd Semester</SelectItem>
            <SelectItem value="3">3rd Semester</SelectItem>
            <SelectItem value="4">4th Semester</SelectItem>
            <SelectItem value="5">5th Semester</SelectItem>
            <SelectItem value="6">6th Semester</SelectItem>
            <SelectItem value="7">7th Semester</SelectItem>
            <SelectItem value="8">8th Semester</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button
          onClick={handleSubmit}>Add</Button>
      </div>
    </div>
  );
}
