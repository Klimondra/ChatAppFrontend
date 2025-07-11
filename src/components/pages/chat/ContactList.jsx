"use client"
import React, {useState} from 'react';
import Link from "next/link";

const ContactList = () => {
    const [clickAnimationData, setClickAnimationData] = useState({clicked: false, contactId: null});

    const contacts = [
        {id: 1, name: 'Jan Novák', lastMessage: "Ahoj, jak se máš?", lastMessageTime: '10:15'},
        {id: 2, name: 'Jan Novák', lastMessage: "Ahoj, jak se máš?", lastMessageTime: '10:15'},
        {id: 3, name: 'Jan Novák', lastMessage: "Ahoj, jak se máš?", lastMessageTime: '10:15'},
        {id: 4, name: 'Jan Novák', lastMessage: "Ahoj, jak se máš?", lastMessageTime: '10:15'},
    ]

    const animateClick = (id) => {
        setClickAnimationData({clicked: true, contactId: id});
    }

    return (
        <section className={`w-full h-full flex flex-col gap-2 overflow-x-hidden`}>
            {contacts.map(contact => (
                <Link
                    key={contact.id}
                    href={`/chat/${contact.id}`}
                    className={`w-full flex flex-row items-center justify-between px-4 py-3
                                bg-white/50 backdrop-blur-lg border-1 border-green-950/10 rounded-3xl
                                hover:translate-x-1.25 active:scale-97 transition-all duration-250
                                ${clickAnimationData.clicked ? (
                                        clickAnimationData.contactId === contact.id ? "!translate-x-full opacity-0" : "-translate-x-2/3 opacity-0"
                                    ) : "opacity-100"}
                                `}
                    onClick={() => animateClick(contact.id)}
                >
                    <div className="flex flex-col gap-0.25">
                        <h6 className={`font-semibold font-main text-lg text-black`}>{contact.name}</h6>
                        <p className={`font-main text-sm`}>{contact.lastMessage}</p>
                    </div>
                    <p className={`font-main font-light text-sm text-green-950`}>{contact.lastMessageTime}</p>
                </Link>
            ))}
        </section>
    );
};

export default ContactList;