'use client';
import HomeView from "./components/views/home/Home";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [error1, setError1] = useState<any>();
  const [error2, setError2] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Mini App’ni to‘liq ekran qilish

      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      } else {
        setError2('Foydalanuvchi maʼlumotlari topilmadi aa');
      }
    } else {
      setError1('Telegram.WebApp obyekti topilmadi');
    }
  }, []);

  return (
    <div>
      <HomeView/>
    </div>
  );
}