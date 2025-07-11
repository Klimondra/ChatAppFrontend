"use client";
import React from 'react';
import PrimaryButton from "@/components/buttons/Primary";
import {MdOutlineChat, MdQuestionMark} from "react-icons/md";
import SecondaryButton from "@/components/buttons/Secondary";
import {useRouter} from "next/navigation";

const HomeButtons = () => {
    const router = useRouter();

    return (
        <div className={`flex flex-col items-center justify-center gap-2 sm:flex-row`}>
            <PrimaryButton
                label={"Chatovat!"}
                icon={<MdOutlineChat />}
                className={`max-sm:w-full`}
                onClick={() => router.push("/chat")}
            />
            <SecondaryButton
                label={"Zjistit více"}
                icon={<MdQuestionMark />}
                className={`max-sm:w-full`}
                onClick={() => alert("Počkej! Tato stránka ještě není hotová, ale již usilovně pracujeme na jejím dokončení!")}
            />
        </div>
    );
};

export default HomeButtons;