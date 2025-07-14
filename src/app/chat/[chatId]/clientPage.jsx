"use client"
import React, {useEffect, useRef, useState} from 'react';
import Header from "@/components/pages/singlechat/Header";
import {useParams} from "next/navigation";
import MessageInput from "@/components/pages/singlechat/MessageInput";
import MessageList from "@/components/pages/singlechat/MessageList";
import Link from "next/link";
import {MdArrowBack} from "react-icons/md";
import {useSession} from "next-auth/react";

const SingleChatClient = () => {
    const [connecting, setConnecting] = useState(true);
    const [chatData, setChatData] = useState({});

    const params = useParams();
    const { chatId } = params;
    const ws = useRef(null)
    const {data: session, status} = useSession();

    useEffect(() => {
        setConnecting(true);
        if (status === "authenticated") {
            connectWebSocket()
        }
    }, [status]);

    const connectWebSocket = () => {
        ws.current = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/ws`)

        ws.current.onopen = () => {
            console.log("WebSocket connected");
            ws.current.send(JSON.stringify({
                type: "joinChat",
                data: {
                    chatId: chatId,
                    userId: session.user.id
                }
            }));
        }

        ws.current.onmessage = (event) => {
            const messageData = JSON.parse(event.data);
            switch (messageData.type) {
                case "joinAccepted":
                    setChatData(messageData);
                    setConnecting(false);
                    console.log("Connected");
                    console.log(messageData);
                    break
            }
        }

        return () => {ws.current.close()}
    }

    return (
        <main className="w-full min-h-dvh bg-green-50 relative flex flex-row lg:gap-4">
            <Header contactName={connecting ? "Připojování..." : chatData.chatName}/>

            <section className="max-lg:hidden w-1/2 h-dvh sticky top-0 px-4 py-8 flex flex-col items-center justify-center gap-4">
                <h1 className={`font-main font-semibold text-4xl text-green-950`}>{connecting ? "Připojování..." : chatData.chatName}</h1>
                <Link href={"/chat"} className={`flex flex-row items-center justify-center gap-2 hover:-translate-x-1 active:scale-97 transition-all duration-250`}>
                    <MdArrowBack className={`text-green-950 w-7 h-7`}/>
                    <p className={`font-main font-normal text-lg`}>Zpět na seznam chatů</p>
                </Link>
            </section>

            <section className="lg:w-1/2 max-lg:w-full relative">
                <div className="w-full h-dvh px-4 pt-20 pb-21 overflow-y-scroll lg:pt-8">
                    <MessageList messages={chatData.messages} />
                </div>
                <MessageInput />
            </section>
        </main>
    );
};

export default SingleChatClient;