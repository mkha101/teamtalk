import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  TrendingUp,
  Tally5,
  Bell,
  MessageCircle,
  AtSign,
  User2,
} from "lucide-react";

export const Menu = () => {
  return (
    <nav className="font-primary pt-2  fixed   min-h-screen bg-black flex  flex-col  items-start gap-5  text-white">
      <Link className="text-2xl px-4 py-2 font-semibold" href={""}>
        TeamTalk
      </Link>
      <div className="flex items-center justify-start px-4 py-2  flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <Home size={24} />{" "}
        <Link className="text-xl" href={""}>
          Home
        </Link>{" "}
      </div>
      <div className="flex items-center justify-start px-4 py-2  flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <TrendingUp size={24} />
        <Link className="text-xl" href={""}>
          Trending
        </Link>{" "}
      </div>

      <div className="flex items-center justify-start px-4 py-2  flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <Tally5 size={24} />
        <Link className="text-xl" href={""}>
          Scores
        </Link>{" "}
      </div>
      <div className="flex items-center justify-start px-4 py-2 flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <Bell size={24} />
        <Link className="text-xl" href={""}>
          Notifications
        </Link>
      </div>
      <div className="flex items-center justify-start px-4 py-2 flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <MessageCircle size={24} />
        <Link className="text-xl" href={""}>
          Messages
        </Link>{" "}
      </div>
      <div className="flex items-center justify-start px-4 py-2  flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <AtSign size={24} />
        <Link className="text-xl" href={""}>
          Mentions
        </Link>{" "}
      </div>
      <div className="flex items-center justify-start px-4 py-2 flex-row gap-5 hover:bg-slate-800  hover:rounded-full">
        {" "}
        <User2 size={24} />
        <Link className="text-xl" href={""}>
          Profile
        </Link>
      </div>

      <Button className="text-lg hover:bg-blue-600 hover:bg-opacity-80 bg-blue-500 px-20 py-6 rounded-full ">
        Post
      </Button>
    </nav>
  );
};
