import React from 'react';
import LoginButtons from "@/components/pages/login/LoginButtons";
import Footer from "@/components/pages/home/footer";

const Login = () => {
    return (
        <main className={`w-full min-h-dvh flex flex-col items-center justify-center bg-green-50`}>
            <section className={`max-w-md w-9/10 h-128 flex flex-col items-center justify-center gap-4`}>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className={`font-main font-bold text-5xl text-green-950`}>Přihlásit se</h1>
                    <p className={`font-main text-lg text-slate-500 text-center`}>Vyberte si Vašeho poskytovatele identity</p>
                </div>
                <LoginButtons/>
            </section>
            <Footer/>
        </main>
    );
};

export default Login;