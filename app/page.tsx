'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [user, setUser] = useState<{ id: number; username?: string; first_name: string } | null>(null);

    useEffect(() => {
      // @ts-ignore
        if (typeof window !== "undefined" && window?.Telegram?.WebApp) {
          // @ts-ignore
            const tg = window?.Telegram.WebApp;
            tg.expand(); // Mini App’ni to‘liq ekran qilish

            if (tg.initDataUnsafe?.user) {
                setUser(tg.initDataUnsafe.user);
            }
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
                <p>Foydalanuvchi ma’lumotlari yuklanmoqda...</p>
            )}
        </div>
    );
}
