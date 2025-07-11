"use client";
import React, {useEffect, useRef} from 'react';

const MessageList = ({messages}) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "auto" });
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <section className={`w-full flex flex-col gap-3 scroll-smooth`}>
            {messages.map((message, i) => {
                const isSender = message.sender === "You";
                return (
                    <article key={message.messageId} className={`flex flex-col p-3 max-w-4/5 border-1 border-green-950/12 rounded-t-3xl 
                                        ${isSender ? "self-end bg-green-300/80 rounded-bl-3xl rounded-br-md" : "self-start bg-white rounded-bl-md rounded-br-3xl"} `}>
                        <p className={`font-main text-base`}>{message.message}</p>
                        <p className={`font-main font-normal text-sm text-slate-500`}>{message.time}</p>
                    </article>
                );
            })}
            <span ref={bottomRef}></span>
        </section>
    );
};

export default MessageList;