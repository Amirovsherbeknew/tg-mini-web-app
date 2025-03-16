import Image from "next/image"
function Header () {
    return (
        <div className="w-full flex justify-between">
            <div className="flex items-center gap-[9px]">
                <button className="linear-info-btn">
                    <Image src={'/layouts/hamster.svg'} alt="hamster" width={18} height={18}/>
                </button>
                <p className="font-semibold text-[12px] text-white">Jack Conev</p>
            </div>
            <div className="flex items-center gap-[9px]">
                <button className="linear-info-btn items-center">
                    <Image src={'/layouts/binance.svg'} alt="hamster" width={24} height={24}/>
                    <p className="font-semibold text-[12px] text-white">Binance</p>
                </button>
            </div>
        </div>
    )
}
export default Header;