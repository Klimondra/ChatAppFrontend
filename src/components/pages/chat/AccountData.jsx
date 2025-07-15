"use client"
import React, {useState} from 'react';
import {useSession} from "next-auth/react";
import SecondaryButton from "@/components/buttons/Secondary";
import {MdClose, MdLogout, MdPerson} from "react-icons/md";
import {signOut} from "next-auth/react";

const AccountData = () => {
    const { data: session } = useSession()
    const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

    return (
        <>
            <section className={`lg:hidden`}>
                <button className={`w-9 h-9 flex items-center justify-center hover:-translate-y-0.5 active:scale-95 transition-all duration-250`}
                        onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
                >
                    <MdPerson className={`w-8 h-8`}/>
                </button>
                <article className={`fixed z-20 top-20 left-0 right-0 w-9/10 mx-auto p-4 flex flex-col gap-4 
                                    bg-white border-1 border-green-950/10 rounded-2xl shadow-lg
                                    ${visibleMobileMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} transition-all duration-300 ease-in-out`}>
                    <div className={`w-full flex flex-row items-center justify-between`}>
                        <h2 className={`font-main font-semibold text-xl`}>Váš Profil</h2>
                        <button className={`hover:-translate-y-0.5 active:scale-90 transition-all duration-300 ease-out`}
                                onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
                        >
                            <MdClose className={`text-slate-400 w-6 h-6 `}/>
                        </button>
                    </div>
                    <div className={`w-full flex flex-row flex-wrap  items-center justify-between`}>
                        {session && <h3 className={`font-main text-lg text-green-950`}>Přihlášen: {session?.user?.name}</h3>}
                        <SecondaryButton label={"Odhlásit se"} icon={<MdLogout />} onClick={() => signOut()}/>
                    </div>
                </article>
            </section>
            <section className={`max-lg:hidden flex flex-col items-center justify-center gap-3`}>
                {session && <h3 className={`font-main text-2xl text-green-950`}>Přihlášen: {session?.user?.name}</h3>}
                <SecondaryButton label={"Odhlásit se"} icon={<MdLogout />} onClick={() => signOut()}/>
            </section>
        </>
    );
};

export default AccountData;