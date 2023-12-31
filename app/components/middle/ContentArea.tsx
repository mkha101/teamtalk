"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import Posts from "./Posts";
import { useRouter } from "next/router";

const ContentArea = () => {
  const [content, setContent] = useState("Your Teams");
  const yourTeamsRef = useRef<HTMLDivElement | null>(null);
  const followingRef = useRef<HTMLDivElement | null>(null);

  const handleContent = (selectedContent: any) => {
    setContent(selectedContent);
  };

  const handleRefresh = () => {
    const router = useRouter();

    router.reload();
  };
  return (
    <main className="ml-[275px] font-secondary  flex w-[600px] text-white h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-slate-600">
      {" "}
      <div className="flex h-32 backdrop-blur-xl bg-black/60 sticky top-0 flex-col">
        {" "}
        <h1 className="text-xl   font-bold p-5 "> Home</h1>
        <div className="grid grid-cols-2  grid-rows-1 h-full ">
          <Button
            onClick={() => handleContent("Your Teams")}
            className={`h-full rounded-none bg-transparent transition duration-200 font-medium hover:bg-white/10 text-sm ${
              content === "Your Teams"
                ? "border-blue-500  border-b-[5px] decoration-blue-500"
                : ""
            }`}
          >
            Your Teams
          </Button>
          <Button
            onClick={() => handleContent("Following")}
            className={`h-full rounded-none bg-transparent transition duration-200 font-medium hover:bg-white/10 text-sm ${
              content === "Following"
                ? "border-blue-500  border-b-[5px] decoration-blue-500  "
                : ""
            }`}
          >
            Following
          </Button>
        </div>
      </div>{" "}
      <div className="border-t-[0.5px] flex items-stretch space-x-2 border-b-[0.5px] py-4 px-3 border-slate-600  relative">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row items-center">
            {" "}
            <div className="w-10 h-10 bg-slate-800 rounded-full flex-none"></div>
            <input
              type="text"
              className="w-full h-full bg-transparent placeholder:text-xl placeholder:text-zinc-500 border-slate-600 p-4 outline-none border-none"
              placeholder="Whats the score?"
            />
          </div>

          <div className="w-full justify-between items-end flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <Button className="text-base hover:bg-blue-600 transition duration-200  hover:bg-opacity-80 bg-blue-500 px-6 py-2 rounded-full ">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
      {content === "Your Teams" && (
        <div ref={yourTeamsRef}>
          {" "}
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      )}
      {content === "Following" && <div ref={followingRef}></div>}
    </main>
  );
};

export default ContentArea;
