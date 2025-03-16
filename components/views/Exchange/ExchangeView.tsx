'use client'
import ClickerCoin from "@/components/entities/ClickerCoin";
import CoinsCount from "@/components/entities/CoinsCount";
import CoinProgress from "@/components/widgets/CoinProgress";
import NumberCoins from "@/components/widgets/NumberCoins";
import { useEffect, useState } from "react";
function ExchangeView () {
    const [count,setCount] = useState<number>(0);
    const handleClick = (newCount: number) => {
        setCount(newCount);
        localStorage.setItem('coin-count',JSON.stringify(count))
    };
    useEffect(() => {
        setCount(Number(JSON.parse(localStorage.getItem('coin-count') || '0')))
    },[])
    return (
        <div className="flex flex-col gap-[10px]">
            <CoinsCount />
            <NumberCoins count={count}/>
            <CoinProgress/>
            <ClickerCoin count={count} onClick={handleClick}/>
        </div>
    )
}
export default ExchangeView;