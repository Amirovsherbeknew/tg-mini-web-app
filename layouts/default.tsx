import Header from "@/components/layouts/header";

export default function DefaultLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-main-bg flex flex-col gap-[5px] px-[11px] py-[37px] h-svh">
            <Header/>
            {children}
        </div>
    )
}