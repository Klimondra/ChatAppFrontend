"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

const ContactList = () => {
    const [clickAnimationData, setClickAnimationData] = useState({clicked: false, contactId: null});
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const { data: session, status } = useSession();

    useEffect(() => {
        setLoading(true);
        if (status === "authenticated") {
            getContacts()
        }
    }, [status]);

    const getContacts = async () => {
        const response = await fetch(`/api/backend/api/contact/list`, {
            method: 'POST',
            body: JSON.stringify({
                userId: session.user.id
            })
        })

        if (!response.ok) {
            setLoading(false);
            return;
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
    }

    const animateClick = (id) => {
        setClickAnimationData({clicked: true, contactId: id});
    }

    return (
        <section className={`w-full h-full flex flex-col gap-2 overflow-x-hidden`}>
            {loading && <p className={`font-main text-2xl text-center`}>Načítání...</p>}
            {!loading && data.contacts?.map(contact => {
                let date = new Date(contact.last_message_time);
                if (date < new Date(2020, 2,1)) {
                    date = Date.now()
                }

                const options = {
                    day: '2-digit',
                    month: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                };

                const dateText = new Intl.DateTimeFormat('cs-CZ', options).format(date);


                return <Link
                    key={contact.room_id}
                    href={`/chat/${contact.room_id}`}
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
                        <h6 className={`font-semibold font-main text-lg text-black`}>{contact.recipient_name}</h6>
                        <p className={`font-main text-sm`}>{contact.last_message_content}</p>
                    </div>
                    <p className={`font-main font-light text-sm text-green-950`}>{dateText}</p>
                </Link>
            }) }
        </section>
    );
};

export default ContactList;