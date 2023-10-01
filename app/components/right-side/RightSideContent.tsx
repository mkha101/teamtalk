import React from "react";
import Container from "../Container";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RightSideContent = () => {
  return (
    <div className="fixed ml-[900px] pt-3 flex flex-col gap-5  text-white">
      <div className="flex rounded-full ">
        <div className="bg-slate-800 flex items-center   rounded-l-full rounded-r-none px-6">
          <Search className="cursor-pointer text-slate-400" size={17} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-slate-800 rounded-l-none rounded-r-full  pr-20 py-2"
        />
      </div>
      <section className="h-[160px] space-y-3 w-[340px] p-4 bg-slate-800 rounded-xl">
        <h1 className=" text-white text-xl font-semibold">
          Subscribe to Premium
        </h1>
        <p className="w-[300px] text-sm font-medium">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <Button className="text-base hover:bg-blue-600  hover:bg-opacity-80 bg-blue-500 px-10  h-8 rounded-full ">
          Subscribe
        </Button>
      </section>
      <section className="h-[160px] space-y-3 w-[340px] p-4 bg-slate-800 rounded-xl">
        <h1 className=" text-white text-xl font-semibold">
          Games on Right Now
        </h1>
      </section>
    </div>
  );
};
