import React from 'react';
import Header from "@/components/pages/chat/Header";
import NewContact from "@/components/pages/chat/NewContact";
import ContactList from "@/components/pages/chat/ContactList";
import Link from "next/link";
import {IoGlobe, IoLogoGithub} from "react-icons/io5";

const ChatPage = () => {
    return (
        <main className="w-full min-h-dvh bg-green-50 relative flex flex-row lg:gap-4">
            <Header />

            <section className={`max-lg:hidden flex-1 w-full min-h-dvh pt-8 px-4 flex flex-col justify-center items-center gap-4`}>
                <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className={`font-main font-semibold text-4xl text-green-950`}>Chat App</h2>
                    <p className={`font-main text-lg text-green-950/80`}>Vytvořil <Link href={"https://klimondra.eu/"} className={"hover:underline"}>Klimondra</Link> v roce 2025</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                    <Link href={"/"} className={`hover:scale-110 active:scale-95 transition-all duration-300`}><IoGlobe className={`w-10 h-10 text-green-950`}/></Link>
                    <Link href={"https://github.com/Klimondra/ChatAppFrontend"} className={`hover:scale-110 active:scale-95 transition-all duration-300`}><IoLogoGithub className={`w-10 h-10 text-green-950`}/></Link>
                </div>
            </section>
            <section className="w-full min-h-dvh relative px-4 pt-20 flex flex-col gap-6 overflow-y-scroll lg:flex-1 lg:pt-8">
                <h3 className={`font-main font-medium text-2xl text-slate-950`}>Vaše kontakty</h3>
                <ContactList />

                <NewContact />
            </section>
        </main>
    );
};

export default ChatPage;