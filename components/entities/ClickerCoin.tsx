"use client";
import Image from "next/image";
import { useState } from "react";
import { ClickerCoinProps } from "@/types/coins.type";
export default function ClickerCoin({count, onClick }: ClickerCoinProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [shake, setShake] = useState(false);

  const handleClick = () => {
      onClick(count+1)
      setShake(true);
      setTimeout(() => setShake(false), 170); // 200ms tebranish
  };

  return (
    <div className="flex flex-col items-center justify-center  text-white">
      <div
        className={`relative w-[250px] h-[250px]  rounded-full flex items-center justify-center shadow-lg
          transition-all duration-150 cursor-pointer text-4xl 
          ${shake ? "animate-shake" : ""}
          ${isPressed ? "scale-110" : ""}`}
        onClick={handleClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <Image src={'/coin/clicker-coin.svg'} alt="clicker-coin" width={400} height={400}/>
      </div>
      <p className="mt-4 text-2xl font-bold">{count} coins</p>
    </div>
  );
}