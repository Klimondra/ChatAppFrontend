"use client";
import React from 'react';
import PrimaryButton from "@/components/buttons/Primary";
import {BsDiscord} from "react-icons/bs";
import {signIn} from "next-auth/react";
import {IoLogoGithub} from "react-icons/io5";

const LoginButtons = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 w-full">
            <PrimaryButton
                label="Přihlásit přes Discord"
                icon={<BsDiscord />}
                onClick={() => signIn("discord", {redirectTo: "/chat"})}
                className={"w-full"} />
            <PrimaryButton
                label="Přihlásit přes GitHub"
                icon={<IoLogoGithub />}
                onClick={() => signIn("github", {redirectTo: "/chat"})}
                className={"w-full"} />
        </div>
    );
};

export default LoginButtons;