import React from 'react';
import HomeButtons from "@/components/pages/home/Buttons";
import Footer from "@/components/pages/home/footer";



const MainPage = () => {
    return (
        <main className="w-full min-h-screen relative flex flex-col items-center justify-center bg-green-50 ">
            <section className={`max-w-6xl w-4/5 mx-8 flex flex-col gap-6`}>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className={`font-main font-bold text-5xl text-green-950 text-center sm:text-6xl`}>Chat App<span className={`text-base px-1.75 py-1 rounded-full bg-green-500 ml-2`}>DEMO</span></h1>
                    <p className={`font-main font-normal text-xl text-slate-500 text-center sm:text-2xl`}>
                        (Ne)Revoluční aplikace pro chatování.
                    </p>
                </div>
                <HomeButtons/>
            </section>
            <Footer />
        </main>
    );
};

export default MainPage;