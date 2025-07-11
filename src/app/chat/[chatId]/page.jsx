"use client"
import React from 'react';
import Header from "@/components/pages/singlechat/Header";
import {useParams} from "next/navigation";
import MessageInput from "@/components/pages/singlechat/MessageInput";
import MessageList from "@/components/pages/singlechat/MessageList";
import Link from "next/link";
import {MdArrowBack} from "react-icons/md";

const SingleChat = () => {
    const params = useParams();
    const { chatId } = params;
    const messages = [
        {
            messageId: "1",
            message: "Ahoj, jak se máš?",
            sender: "You",
            time: "10:00 AM",
        },
        {
            messageId: "2",
            message: "Ahoj, mám se dobře, a ty?",
            sender: "Jan Novák",
            time: "10:01 AM",
        },
        {
            messageId: "3",
            message: "Taky se mám fajn, co plánuješ na víkend?",
            sender: "You",
            time: "10:02 AM",
        },
        {
            messageId: "4",
            message: "Ahoj, jak se máš?",
            sender: "You",
            time: "10:00 AM",
        },
        {
            messageId: "5",
            message: "Ahoj, mám se dobře, a ty?",
            sender: "Jan Novák",
            time: "10:01 AM",
        },
        {
            messageId: "6",
            message: "Taky se mám fajn, co plánuješ na víkend?",
            sender: "You",
            time: "10:02 AM",
        },{
            messageId: "7",
            message: "Ahoj, jak se máš?",
            sender: "You",
            time: "10:00 AM",
        },
        {
            messageId: "8",
            message: "Ahoj, mám se dobře, a ty?",
            sender: "Jan Novák",
            time: "10:01 AM",
        },
        {
            messageId: "9",
            message: "Taky se mám fajn, co plánuješ na víkend?",
            sender: "You",
            time: "10:02 AM",
        },{
            messageId: "10",
            message: "Ahoj, jak se máš?",
            sender: "You",
            time: "10:00 AM",
        },
        {
            messageId: "11",
            message: "Ahoj, mám se dobře, a ty?",
            sender: "Jan Novák",
            time: "10:01 AM",
        },
        {
            messageId: "12",
            message: "Taky se mám fajn, co plánuješ na víkend?",
            sender: "You",
            time: "10:02 AM",
        },
    ]

    return (
        <main className="w-full min-h-dvh bg-green-50 relative flex flex-row lg:gap-4">
            <Header contactName={"Jan Novák"}/>

            <section className="max-lg:hidden w-1/2 h-dvh sticky top-0 px-4 py-8 flex flex-col items-center justify-center gap-4">
                <h1 className={`font-main font-semibold text-4xl text-green-950`}>Jan Novák</h1>
                <Link href={"/chat"} className={`flex flex-row items-center justify-center gap-2 hover:-translate-x-1 active:scale-97 transition-all duration-250`}>
                    <MdArrowBack className={`text-green-950 w-7 h-7`}/>
                    <p className={`font-main font-normal text-lg`}>Zpět na seznam chatů</p>
                </Link>
            </section>

            <section className="lg:w-1/2 max-lg:w-full relative">
                <div className="w-full h-dvh px-4 pt-20 pb-21 overflow-y-scroll lg:pt-8">
                    <MessageList messages={messages} />
                </div>
                <MessageInput />
            </section>
        </main>
    );
};

export default SingleChat;