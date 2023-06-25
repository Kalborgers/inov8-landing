import Image from 'next/image';
import Link from 'next/link';

import jeep from "@/assets/jeep.png";
import commute from "@/assets/commute.png";
import logo from "@/assets/logo1.png";

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
                <div id="about" className="flex h-full w-full items-center justify-center">
                    <div className="h-full w-2/3 z-10 mx-auto absolute">
                        asd
                    </div>
                    <Image className="h-full w-full z-0 relative" src={jeep} />
                </div>

                {/* FEATURES */}
                {/* layer 2 divs, lower div for bg color: flex-col 2 child divs 1/3 yellow, 2/3 white */}
                <div id="features">

                </div>

                {/* SIGNUP */}
                <div id="signup">

                </div>

                {/* CHOOSE PLAN */}
                <div>

                </div>

            </div>
        </main>
    );
}
