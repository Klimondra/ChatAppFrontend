import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={`absolute bottom-0 w-full min-h-12 bg-green-300/50 flex items-center justify-center`}>
            <p className={`text-center font-main text-black`}
            >
                Vytvořil <Link href={"https://klimondra.eu"} className={`hover:underline`}>Klimondra</Link> v roce {new Date(Date.now()).getFullYear()} | <Link href={"/tos"} className={`hover:underline`}>Podmínky používání</Link> | <Link href={"/privacy-policy-cookies"} className={`hover:underline`}>GDPR & Cookies</Link>
            </p>
        </footer>
    );
};

export default Footer;