import Image from "next/image";

function NumberCoins ({count}:{count:number}) {
    return (
        <div className="flex gap-[8px] items-center justify-center">
            <Image src={'/coin/coin-icon.svg'} alt="coin-number" width={42} height={32}/>
            <p className="font-bold text-[40px] text-coin-number mt-2">{count}</p>
        </div>
    )
}
export default NumberCoins;