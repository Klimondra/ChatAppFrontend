"use client"
import React, {useEffect, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize'
import {MdSend} from "react-icons/md";
import SlidingIcon from "@/components/utils/SlidingIcon";

const MessageInput = ({sendMessage}) => {
    const [message, setMessage] = useState("");
    const [showSendBtn, setShowSendBtn] = useState(false);
    const [sendBtnHover, setSendBtnHover] = useState(false);

    useEffect(() => {
        if (message.length > 0) {
            setShowSendBtn(true)
        } else {
            setShowSendBtn(false)
        }
    }, [message]);

    return (
        <div className="fixed bottom-4 w-full min-h-14 flex items-center justify-center lg:w-5/10">
            <div className="w-9/10 p-3 flex flew-row items-center relative bg-white/70 backdrop-blur-lg border-1 border-green-950/10 rounded-[23px] shadow-xs">
                <TextareaAutosize
                    minRows={1}
                    maxRows={5}
                    value={message}
                    placeholder="Napište zprávu..."
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-[calc(100%-48px)] font-main font-normal text-slate-950 outline-none text-lg resize-none`}
                />
                <button
                    className={`absolute bottom-1.5 right-1.5 w-10 h-10 flex items-center justify-center 
                    bg-green-500 rounded-full shadow-sm
                    ${showSendBtn ? "opacity-100  rotate-0" : "opacity-0 -rotate-135"} hover:bg-green-400 hover:shadow-md active:scale-90 transition-all duration-300 ease-in-out`}
                    onMouseEnter={() => setSendBtnHover(true)}
                    onMouseLeave={() => setSendBtnHover(false)}
                    onClick={() => {sendMessage(message); setMessage("")}}
                >
                    <SlidingIcon width="5" height="5" hoverState={sendBtnHover} icon={<MdSend/>}/>
                </button>
            </div>
        </div>
    );
};

export default MessageInput;