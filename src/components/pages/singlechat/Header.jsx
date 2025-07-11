import React from 'react';
import Link from "next/link";
import {MdArrowBack} from "react-icons/md";

const SingleChatHeader = ({contactName}) => {
    return (
        <header className={`fixed top-0 left-0 right-0 z-30 w-full h-16 px-6 flex flex-row items-center gap-4 bg-green-500/90 backdrop-blur-lg shadow-sm lg:h-4`}>
            <Link href={"/chat"} className={`flex items-center justify-center hover:-translate-x-1 active:scale-90 transition-all duration-250 lg:hidden`}>
                <MdArrowBack className={`text-green-950 w-8 h-8`}/>
            </Link>
            <h2 className={`font-main font-semibold text-3xl text-green-950 lg:hidden`}>{contactName}</h2>
        </header>
    );
};

export default SingleChatHeader;