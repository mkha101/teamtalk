import { BarChart, Circle, Dot, Heart, MessageCircleIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { AiOutlineRetweet } from "react-icons/ai";

const Posts = () => {
  return (
    <div className="p-3 border-b-[0.5px] border-slate-600">
      <div className="flex flex-col">
        <div className="flex flex-row gap-3">
          {" "}
          <div className="w-10 h-10 cursor-pointer bg-slate-800 rounded-full flex-none">
            {" "}
            <Image
              className="rounded-xl "
              width={100}
              height={100}
              src={"/lakerslogo.jpeg"}
              alt={""}
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-2">
              {" "}
              <h1 className="text-base">Los Angeles Lakers</h1>
              <div className="flex items-center">
                {" "}
                <span className="text-slate-500">@Lakers</span>
                <span className="text-slate-500 ">
                  <Dot size={15} />
                </span>
                <span className="text-slate-500 text-sm">7 hr</span>{" "}
              </div>
            </div>
            <p className="text-base text-slate-200">Run it back.</p>
            <div className="py-3">
              {" "}
              <Image
                className="rounded-xl "
                width={450}
                height={450}
                src={"/lakers.jpeg"}
                alt={""}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-28 py-1 px-16">
          <span>
            <MessageCircleIcon
              size={20}
              className="text-slate-500 cursor-pointer hover:text-slate-300 transition duration-200"
            />
          </span>
          <span className="text-slate-500 cursor-pointer text-xl transition duration-200 hover:text-slate-300">
            <AiOutlineRetweet />
          </span>{" "}
          <span>
            <Heart
              size={20}
              className="text-slate-500 cursor-pointer hover:text-slate-300 transition duration-200"
            />
          </span>{" "}
          <span>
            <BarChart
              size={20}
              className="text-slate-500 cursor-pointer hover:text-slate-300 transition duration-200"
            />
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Posts;
