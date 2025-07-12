import React from 'react';
import AccountData from "@/components/pages/chat/AccountData";
import {SessionProvider} from "next-auth/react";

const Header = () => {
    return (
        <header className={`absolute top-0 left-0 right-0 z-30 w-full h-16 px-6 flex flex-row items-center justify-between bg-green-500/90 backdrop-blur-lg shadow-sm lg:h-4`}>
            <h2 className={`font-main font-semibold text-3xl text-green-950 lg:hidden `}>Chat App</h2>
            <section className={`lg:hidden`}>
                <SessionProvider >
                    <AccountData />
                </SessionProvider>
            </section>


        </header>
    );
};

export default Header;