import React from "react";
import SecondaryButton from "@/components/buttons/Secondary";
import {MdArrowBack} from "react-icons/md";
import Link from "next/link";

const PrivacyCookies = () => (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-green-50 py-12">

        <Link href={"/"} className={`mb-6`}>
            <SecondaryButton label={"Zpět na hlavní stránku"} icon={<MdArrowBack/>} />
        </Link>

        <section className="max-w-6xl w-4/5 mx-8 flex flex-col gap-8">
            {/* Nadpis */}
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-main font-bold text-4xl text-green-950 text-center sm:text-5xl">
                    Privacy & Cookies
                </h1>
                <p className="font-main text-lg text-slate-600 text-center sm:text-xl">
                    Co sbíráme, proč a jak s tím zacházíme.
                </p>
            </div>

            {/* Privacy Policy */}
            <article className="bg-white p-6 rounded-lg shadow-md space-y-5">
                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Správce a kontakt
                </h2>
                <p className="font-main text-base text-slate-700">
                    Správcem je fyzická osoba Ondřej Klíma. Email:{" "}
                    <a href="mailto:klimondra@klimondra.eu" className="text-green-700 underline">
                        klimondra@klimondra.eu
                    </a>
                    . Aplikace je výhradně demo, nepodnikám.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Co sbíráme
                </h2>
                <ul className="list-disc list-inside font-main text-base text-slate-700 space-y-2">
                    <li>Chat zprávy (šifrované AES‑GCM) + metadata (čas, chat, odesílatel).</li>
                    <li>Profil (jméno/username, email, profilový obrázek od poskytovatele).</li>
                    <li>Autentizace (provider, ID, refresh/access token a expirace).</li>
                    <li>Session cookies (token + expirace relace).</li>
                </ul>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Proč
                </h2>
                <p className="font-main text-base text-slate-700">
                    Pro provoz chatu (login, relace, ukládání zpráv). Email případně pro kontakt ohledně změn nebo výmazu.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Jak dlouho
                </h2>
                <p className="font-main text-base text-slate-700">
                    Zprávy: do ukončení demoverze, pak trvale smazané. Ostatní data: do expirace tokenu nebo ukončení provozu.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Sdílíme to?
                </h2>
                <p className="font-main text-base text-slate-700">
                    Ne. Data zpracovává výhradně správce, bez předávání třetím.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Kde to běží
                </h2>
                <p className="font-main text-base text-slate-700">
                    Vercel, Neon, Railway (EU/USA). Veškerá komunikace přes HTTPS. Pokud data jedou mimo EU, jsou zajištěny standardní smluvní doložky.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Vaše práva
                </h2>
                <p className="font-main text-base text-slate-700">
                    Můžete si data prohlédnout, požádat o výmaz či opravu. Stačí napsat na{" "}
                    <a href="mailto:klimondra@klimondra.eu" className="text-green-700 underline">
                        klimondra@klimondra.eu
                    </a>
                    .
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Bezpečnost
                </h2>
                <p className="font-main text-base text-slate-700">
                    Přenos dat přes HTTPS, zprávy šifrovány AES‑GCM, přístup k databázi pouze já, žádné zálohy (protože jde o demo).
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    Změny
                </h2>
                <p className="font-main text-base text-slate-700">
                    Politiku mohu aktualizovat. Datum na stránce vždy aktuální.
                </p>

                <h2 className="font-main font-semibold text-2xl text-green-900">
                    (Volitelné) Stížnosti
                </h2>
                <p className="font-main text-base text-slate-700">
                    Formálně máte právo obrátit se na ÚOOÚ, ale doporučuji nejdřív napsat mně – sdělíme si info a najdeme řešení.
                </p>
            </article>

            {/* Cookies */}
            <article className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <h2 className="font-main font-semibold text-2xl text-green-900">
                    🍪 Cookies
                </h2>
                <p className="font-main text-base text-slate-700">
                    Používáme pouze nezbytné session cookies pro přihlášení a relace. Tyto cookies jsou „strictly necessary” a souhlas k nim nemusíte dávat.
                </p>
                <p className="font-main text-base text-slate-700">
                    Expirace proběhne s ukončením relace nebo vypršením tokenu. Můžete je také smazat přes nastavení prohlížeče.
                </p>
                <p className="font-main text-base text-slate-700">
                    Nepoužíváme analytiku ani marketingové cookies, takže nemáme banner.
                </p>
            </article>
        </section>
    </main>
);

export default PrivacyCookies;
