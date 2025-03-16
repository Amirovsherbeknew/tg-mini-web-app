import Image from "next/image";
import { ProfitType } from "@/types/profits.type";
function CointProfitBtn ({profit}:{profit:ProfitType}) {
    return (
        <button className="main-btn !px-[20px] flex-col">
            <p className={profit.className}>{profit.title}</p>
            <div className="flex items-center justify-center gap-[3px]">
                <Image src={profit.icon} alt={profit.title} width="17" height="17"/>
                <p className="text-white text-[11px] mt-1">{profit.count}</p>
                {profit.icon_second ? <Image  src={profit.icon_second} alt={profit.title} width="17" height="17"/>:null}
            </div>
        </button>
    )
}
export default CointProfitBtn;