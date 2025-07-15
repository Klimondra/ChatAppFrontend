"use client"
import React, {useEffect, useState} from 'react';
import PrimaryButton from "@/components/buttons/Primary";
import {MdClose, MdOutlinePersonAddAlt, MdSend} from "react-icons/md";
import {useSession} from "next-auth/react";
import SlidingIcon from "@/components/utils/SlidingIcon";
import {useRouter} from "next/navigation";

const NewContact = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [SendBtnHover, setSendBtnHover] = useState(false);
    const [sendBtnVisible, setSendBtnVisible] = useState(false);
    const [errorSign, setErrorSign] = useState(false);
    const [enteredCode, setEnteredCode] = useState("");
    const [placeholder, setPlaceholder] = useState("Zadejte ID kontaktu...");
    const {data: session} = useSession();
    const router = useRouter();

    useEffect(() => {
        const hasNonNumbers = /\D/.test(enteredCode);

        if (enteredCode.length > 0 && hasNonNumbers) {
            setErrorSign(true);
            setSendBtnVisible(false)
        } else if (enteredCode.length === 0 ) {
            setErrorSign(false);
            setSendBtnVisible(false);
        } else {
            setErrorSign(false);
            setSendBtnVisible(true);
        }
    }, [enteredCode]);

    const onSend = async () => {
        const code = enteredCode;
        setEnteredCode("");
        setPlaceholder("Načítám kontakt...");

        const contactId = parseInt(code);

        const response = await fetch("/api/backend/api/contact/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idToContact: contactId,
                userId: session.user.id
            })
        })

        const data = await response.json();
        router.push("/chat/" + data.roomId);
    }

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
                    <h6 className={`font-main`}>Vaše ID: {session && session.user.id}</h6>
                    <div className={`w-full p-3 flex flew-row items-center relative bg-white/70 backdrop-blur-lg border-1 ${errorSign ? "border-red-600/50 shadow-red-100" : "border-green-950/10"} rounded-[23px] shadow-xs`}>
                        <input
                            type="text"
                            inputMode={"numeric"}
                            value={enteredCode}
                            placeholder={placeholder}
                            onChange={(e) => setEnteredCode(e.target.value)}
                            className={`w-[calc(100%-48px)] font-main font-normal text-slate-950 outline-none text-lg resize-none`}
                        />
                        <button
                            className={`absolute bottom-1.5 right-1.5 w-10 h-10 flex items-center justify-center 
                    bg-green-500 rounded-full shadow-sm
                    ${sendBtnVisible ? "opacity-100  rotate-0" : "opacity-0 -rotate-135"} hover:bg-green-400 hover:shadow-md active:scale-90 transition-all duration-300 ease-in-out`}
                            onMouseEnter={() => setSendBtnHover(true)}
                            onMouseLeave={() => setSendBtnHover(false)}
                            onClick={() => onSend()}
                        >
                            <SlidingIcon width="5" height="5" hoverState={SendBtnHover} icon={<MdSend/>}/>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default NewContact;