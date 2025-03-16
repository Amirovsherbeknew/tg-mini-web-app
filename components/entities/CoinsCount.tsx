import { ProfitType } from "@/types/profits.type";
import CointProfitBtn from "../widgets/CointProfitBtn";

function CoinsCount () {
    const Profits:ProfitType[] = [
        {
            title:'Earn per tap',
            className:'text-medium text-[11px] text-brown',
            icon:'/coin/coin-icon.svg',
            count:'+12',
            icon_second:''
        },
        {
            title:'Coins to level up',
            className:'text-medium text-[11px] text-custom-indigo',
            icon:'/coin/coin-icon.svg',
            count:'10 M',
            icon_second:''
        },
        {
            title:'Profit per hour',
            className:'text-medium text-[11px] text-custom-green',
            icon:'/coin/coin-icon.svg',
            count:'+636.31K',
            icon_second:'/info.svg'
        },
    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-3 gap-[9px]">
                {
                    Profits.map((row:ProfitType,idx:number) => {
                        return <CointProfitBtn profit={row} key={idx}/>
                    })
                }
            </div>
        </div>
    )
}
export default CoinsCount;