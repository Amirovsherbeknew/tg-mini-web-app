"use client";
import Image from "next/image";
import { useState } from "react";

export default function ClickerCoin() {
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setShake(true);
    setTimeout(() => setShake(false), 200); // 200ms tebranish
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div
        className={`relative w-24 h-24  rounded-full flex items-center justify-center shadow-lg
          transition-all duration-150 cursor-pointer text-4xl 
          ${shake ? "animate-shake" : ""}
          ${isPressed ? "scale-110" : ""}`}
        onClick={handleClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <Image src={'/coiner/clicker-coin.svg'} alt="clicker-coin" width={400} height={400}/>
      </div>
      <p className="mt-4 text-2xl font-bold">{count} coins</p>
    </div>
  );
}
