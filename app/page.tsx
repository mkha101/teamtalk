import Image from "next/image";
import { Menu } from "./components/menu/Menu";
import ContentArea from "./components/middle/ContentArea";
import { RightSideContent } from "./components/right-side/RightSideContent";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <Menu />
        <ContentArea />
        <RightSideContent />
      </div>
    </div>
  );
}
