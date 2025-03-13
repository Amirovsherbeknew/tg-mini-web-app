import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/app/components/ui/menubar"
import { House,User,Rocket,Pickaxe,Wallet } from "lucide-react"
  export function MenubarDemo() {
    return (
      <Menubar className="fixed bottom-0 !gap-[15px">
        <MenubarMenu>
          <MenubarTrigger className="flex-col">
            <House />
            <div>Home</div>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex-col">
            <Rocket />
            <div>Home</div>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex-col">
            <Pickaxe/>
            <div>Home</div>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex-col">
            <Wallet/>
            <div>Home</div>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex-col">
            <User/>
            <div>Home</div>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
  }
  