import React from 'react';
import {SessionProvider} from "next-auth/react";
import SingleChatClient from "@/app/chat/[chatId]/clientPage";

const SingleChat = () => {
    return (
        <SessionProvider>
            <SingleChatClient />
        </SessionProvider>
    );
};

export default SingleChat;