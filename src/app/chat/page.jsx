import React from 'react';
import Header from "@/components/pages/chat/Header";
import NewContact from "@/components/pages/chat/NewContact";
import ContactList from "@/components/pages/chat/ContactList";
import PcLeftBar from "@/components/pages/chat/PcLeftBar";
import {SessionProvider} from "next-auth/react";

const ChatPage = () => {

    return (
        <main className="w-full min-h-dvh bg-green-50 relative flex flex-row lg:gap-4">
            <Header />

            <PcLeftBar />
            <section className="w-full min-h-dvh relative px-4 pt-20 flex flex-col gap-6 overflow-y-scroll lg:flex-1 lg:pt-8">
                <h3 className={`font-main font-medium text-2xl text-slate-950`}>Vaše kontakty</h3>
                <SessionProvider>
                    <ContactList />
                </SessionProvider>


                <NewContact />
            </section>
        </main>
    );
};

export default ChatPage;