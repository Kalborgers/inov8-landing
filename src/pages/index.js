import Image from 'next/image';
import Link from 'next/link';

import jeep from "@/assets/jeep.png";
import commute from "@/assets/commute.png";
import logo from "@/assets/logo1.png";

import gps from "@/assets/gps.png";

export default function Home() {
    return (
        <main className="bg-white">
            {/* NAV BAR */}
            <div className="flex flex-row bg-white h-20 w-full justify-between">
                <Link href="#home">
                    <Image className="h-full w-52 py-2 pl-4" src={logo} />
                </Link>
                <div className="flex flex-row text-[#403F45] space-x-10 text-3xl pr-7 pt-5">
                    <Link href="#about">ABOUT</Link>
                    <Link href="#features">FEATURES</Link>
                    <Link href="#signup">SIGNUP</Link>
                </div>
            </div>

            <div className="flex flex-col h-full w-full space-y-14">

                {/* WELCOME */}
                <div id="home" className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col h-full w-2/3 z-10 mx-auto absolute items-center">
                        <Image className="h-1/3 w-2/3 py-2 pl-4 mt-20" src={logo} />
                        <p className="mt-20 mb-10 text-5xl text-black">The new way of commuting in Metro Manila.</p>
                        <Link href="#about">
                            <button className="h-16 w-52 rounded-xl bg-[#FDE300] text-black text-3xl hover:bg-[#DCC500]">
                                LEARN MORE
                            </button>
                        </Link>
                    </div>
                    <Image className="h-full w-full z-0 relative" src={jeep} />
                </div>

                {/* ABOUT */}
                <div id="about" className="flex h-full w-full items-center justify-end relative z-0">
                    <div className="flex flex-col h-3/5 w-1/2 z-20 bg-[#403F45] rounded-xl items-center z-20 absolute">
                        <p className="w-11/12 ml-14 mt-14 font-bold text-5xl">Tired of asking for information on commute routes in Metro Manila?</p>
                        <p className="w-4/5 mt-12 text-3xl px-32 mx-auto text-justify">
                            <span className="text-[#FDEC00]">Para Po</span> offers up to date and reliable information on transportation across Metro Manila.
                        </p>
                    </div>
                    <div className="h-full w-full z-10 bg-[#403F45]/[.5] z-10 absolute"></div>
                    <Image className="h-full w-full" src={commute} />
                </div>

                {/* FEATURES */}
                {/* for bg, maybe layer 2 divs, lower div for bg color: flex-col 2 child divs 1/3 yellow, 2/3 white */}
                <div id="features" className="flex h-fit w-full items-center justify-end relative z-0">

                    {/* CONTENT */}
                    <div className="flex flex-col h-full w-full z-20 absolute space-y-10">
                        {/* HEADER */}
                        <div className="flex flex-col h-2/12 text-[#414046] ml-10">
                            <p className="text-7xl font-bold">Features</p>
                            <p className="text-3xl font-semibold">The multiple features of Para Po.</p>
                        </div>

                        {/* FIRST ROW 3 FEATURES */}
                        <div className="flex flex-row h-5/12 justify-between px-24 space-x-24">
                            <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
                                <Image className="h-1/2 w-full" src={gps} />
                                <div className="flex flex-col h-1/2 w-full items-center justify-between">
                                    <p className="text-3xl text-[#F3DF0F]">GPS</p>
                                    <p className="text-lg text-center">Find your way through the map.</p>
                                </div>
                            </div>
                            <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
                                asd
                            </div>
                            <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
                                asd
                            </div>
                        </div>

                        {/* SECOND ROW 2 FEATURES */}
                        <div className="flex flex-row h-5/12 justify-center px-24 space-x-24">
                            <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
                                <Image className="h-1/2 w-full" src={gps} />
                                <div className="flex flex-col h-1/2 w-full items-center justify-between">
                                    <p className="text-3xl text-[#F3DF0F]">GPS</p>
                                    <p className="text-lg text-center">Find your way through the map.</p>
                                </div>
                            </div>
                            <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
                                asd
                            </div>
                        </div>
                    </div>

                    {/* BG COLORS 1/3 2/3 white */}
                    <div className="flex flex-col h-full w-full">
                        <div className="h-1/3 w-full bg-[#F3DF0F] p-1"></div>
                        <div className="h-2/3 w-full bg-white p-1"></div>
                    </div>
                </div>

                {/* SIGNUP */}
                <div id="signup" className="flex flex-col h-full w-full text-[#414046]">
                    <p className="">Sign Up for a Demo!</p>
                    <p className="">Have a personalized demonstration of Para Po with a member of the development team for free!</p>
                    <p className="">Just fill up the form and a member of the team will get back to you.</p>
                </div>

                {/* CHOOSE PLAN */}
                <div>

                </div>

            </div>
        </main>
    );
}
