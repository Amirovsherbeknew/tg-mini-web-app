'use client';

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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Telegram User Info</h1>
      {user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username || "No username"}</p>
          <p><strong>First Name:</strong> {user.first_name}</p>
        </div>
      ) : (
        <p>Foydalanuvchi maʼlumotlari yuklanmoqda...</p>
      )}
      <hr />
      {error1 && <p>Xato 1: {error1}</p>}
      <hr />
      {error2 && <p>Xato 2: {error2}</p>}
    </div>
  );
}