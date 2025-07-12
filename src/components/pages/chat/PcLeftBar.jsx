import React from 'react';
import Link from "next/link";
import {IoGlobe, IoLogoGithub} from "react-icons/io5";
import AccountData from "@/components/pages/chat/AccountData";
import {SessionProvider} from "next-auth/react";

const PcLeftBar = () => {
    return (
        <section className={`max-lg:hidden flex-1 w-full min-h-dvh pt-8 px-4 flex flex-col justify-center items-center gap-4`}>
            <div className="flex flex-col items-center justify-center gap-1">
                <h2 className={`font-main font-semibold text-4xl text-green-950`}>Chat App</h2>
                <p className={`font-main text-lg text-green-950/80`}>Vytvořil <Link href={"https://klimondra.eu/"} className={"hover:underline"}>Klimondra</Link> v roce 2025</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-3">
                <Link href={"/"} className={`hover:scale-110 active:scale-95 transition-all duration-300`}><IoGlobe className={`w-10 h-10 text-green-950`}/></Link>
                <Link href={"https://github.com/Klimondra/ChatAppFrontend"} className={`hover:scale-110 active:scale-95 transition-all duration-300`}><IoLogoGithub className={`w-10 h-10 text-green-950`}/></Link>
            </div>
            <span className={`h-0.25 w-1/2 border-1 border-slate-500/50`}></span>
            <SessionProvider>
                <AccountData />
            </SessionProvider>
        </section>
    );
};

export default PcLeftBar;