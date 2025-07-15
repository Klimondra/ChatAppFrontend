import React from "react";
import SecondaryButton from "@/components/buttons/Secondary";
import {MdArrowBack} from "react-icons/md";
import Link from "next/link";

const TermsOfService = () => (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-green-50 py-12">

        <Link href={"/"} className={`mb-6`}>
            <SecondaryButton label={"Zpět na hlavní stránku"} icon={<MdArrowBack/>} />
        </Link>

        <section className="max-w-6xl w-4/5 mx-8 flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-main font-bold text-4xl text-green-950 text-center sm:text-5xl">
                    Terms of Service
                </h1>
                <p className="font-main text-lg text-slate-600 text-center sm:text-xl">
                    Podmínky používání demo chatovací aplikace.
                </p>
            </div>

            <article className="bg-white p-6 rounded-lg shadow-md space-y-5">
                <h2 className="font-main font-semibold text-2xl text-green-900">
                    1. Úvod
                </h2>
                <p className="font-main text-base text-slate-700">
                    Tato aplikace slouží jako demo pro ukázku technologií – realtime textový chat mezi uživateli.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    2. Účty a registrace
                </h2>
                <p className="font-main text-base text-slate-700">
                    Uživatelé se přihlašují přes Google, Discord, nebo GitHub. Nemají možnost smazat účet sami – v případě potřeby kontaktujte správce na emailu.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    3. Přijatelné chování
                </h2>
                <p className="font-main text-base text-slate-700">
                    Prosíme, vyhněte se nevhodnému chování, včetně ale ne pouze:
                </p>
                <ul className="list-disc list-inside font-main text-base text-slate-700 space-y-1">
                    <li>spam, urážky, nenávistné projevy, šíření nelegálního obsahu;</li>
                    <li>vyhrožování, pornografie, nenávistné projevy;</li>
                    <li>sdílení osobních údajů jiných osob bez souhlasu;</li>
                    <li>jakékoli další chování porušující zákony nebo dobré mravy.</li>
                </ul>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    4. Bez záruk – AS IS
                </h2>
                <p className="font-main text-base text-slate-700">
                    Tato demo aplikace je poskytována „jak je“ bez záruk. Správce neodpovídá za výpadky, chyby, ztrátu dat nebo škody vzniklé používáním.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    5. Otevřený kód
                </h2>
                <p className="font-main text-base text-slate-700">
                    Kód je dostupný na GitHubu pod licencí GNU GPL v3. Více viz repozitář.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    6. Změny a ukončení
                </h2>
                <p className="font-main text-base text-slate-700">
                    Správce může kdykoli změnit tyto podmínky nebo ukončit provoz bez předchozího upozornění. Běžnou praxí je aktualizace dokumentu s datem.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    7. Kontakt
                </h2>
                <p className="font-main text-base text-slate-700">
                    V případě dotazů nebo žádosti o výmaz dat kontaktujte:
                    <a href="mailto:klimondra@klimondra.eu" className="text-green-700 underline"> klimondra@klimondra.eu</a>.
                </p>
            </article>
        </section>
    </main>
);

export default TermsOfService;
