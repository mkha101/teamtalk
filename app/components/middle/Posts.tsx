import { Circle, Dot } from "lucide-react";
import React from "react";
import Image from "next/image";

const Posts = () => {
  return (
    <div className="p-3 border-b-[0.5px] border-slate-600">
      <div className="flex flex-col">
        <div className="flex flex-row gap-3">
          {" "}
          <div className="w-10 h-10 bg-slate-800 rounded-full flex-none"></div>
          <div className="flex flex-col ">
            <div className="flex gap-2">
              {" "}
              <h1 className="text-base">Los Angeles Lakers</h1>
              <div className="flex items-center">
                {" "}
                <span className="text-slate-500">@Lakers</span>
                <span className="text-slate-500 ">
                  <Dot />
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
      </div>
    </div>
  );
};

export default Posts;
