import React from 'react';
import HomeButtons from "@/components/pages/home/Buttons";



const MainPage = () => {
    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-green-50 ">
            <section className={`max-w-6xl w-4/5 mx-8 flex flex-col gap-6`}>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className={`font-main font-bold text-5xl text-green-950 text-center sm:text-6xl`}>Chat App</h1>
                    <p className={`font-main font-normal text-xl text-slate-500 text-center sm:text-2xl`}>
                        Revoluční aplikace pro chatování.
                    </p>
                </div>
                <HomeButtons/>
            </section>
        </main>
    );
};

export default MainPage;