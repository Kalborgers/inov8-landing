import React from "react";

export default function Hero() {
    return (
        <section
            id="home"
            className="w-full h-screen bg-[url('/assets/jeep.png')]"
        >
            <div className="m-auto max-w-[75%] flex flex-col justify-center items-center align-middle h-full">
                <img src="/assets/logo1.png" />
                <p className="mt-20 mb-10 text-5xl text-[#252525]">
                    The new way of commuting in Metro Manila.
                </p>
                <a
                    href="#about"
                    className="p-5 rounded-xl bg-[#FDE300] text-3xl hover:bg-[#DCC500]"
                >
                    LEARN MORE
                </a>
            </div>
        </section>
    );
}
