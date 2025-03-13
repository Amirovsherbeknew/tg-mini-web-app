'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [user, setUser] = useState<any>(null);
    const [error1,setError1] = useState<any>()
    const [error2,setError2] = useState<any>()
    useEffect(() => {
      // @ts-ignore
        if (WebApp.initDataUnsafe.user) {
          // @ts-ignore
          setUser(WebApp.initDataUnsafe.user)
          // // @ts-ignore
          //   const tg = window?.Telegram.WebApp;
          //   tg.expand(); // Mini App’ni to‘liq ekran qilish

          //   if (tg.initDataUnsafe?.user) {
          //       setUser(tg.initDataUnsafe.user);
          //   }
          //   else {
          //     setError2('topilmadi 2')
          //   }
        }
        else {
          setError1('topilmadi')
        }
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Telegram User Info</h1>
            {user ? JSON.stringify(user) : 
                <p>Foydalanuvchi ma’lumotlari yuklanmoqda...</p>
            }
            <hr />
            {JSON.stringify(error1)}
            <hr />
            {JSON.stringify(error2)}
        </div>
    );
}
