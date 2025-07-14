"use client"
import React, {useState} from 'react';
import PrimaryButton from "@/components/buttons/Primary";
import {MdClose, MdOutlinePersonAddAlt} from "react-icons/md";

const NewContact = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <section className={`absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden`}>
            <div className={`fixed bottom-3.5 right-3.5 overflow-none`}>
                <PrimaryButton
                    label={"Nový kontakt"}
                    icon={<MdOutlinePersonAddAlt />}
                    onClick={() => setMenuVisible(true)}
                    className={`${menuVisible ? "translate-x-full opacity-0" : "translate-0 opacity-100"} transition-all duration-300 ease-in-out`}
                />
            </div>
            <section className={`mb-4 w-9/10 p-4 mx-auto overflow-hidden relative
                                bg-white/70 backdrop-blur-lg border-1 border-green-950/10 rounded-2xl
                                ${menuVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition-all duration-300 ease-in-out`}
            >
                <button
                    className={`absolute top-4 right-4 hover:-translate-y-0.5 active:scale-90 trasition-all duration-300 ease-out`}
                    onClick={() => setMenuVisible(false)}
                >
                    <MdClose className={`text-slate-400 w-6 h-6 `}/>
                </button>

                <div className={`flex flex-col gap-4`}>
                    <h5 className={`font-main font-medium text-xl text-green-950`}>Najít kontakt</h5>

                </div>
            </section>
        </section>
    );
};

export default NewContact;