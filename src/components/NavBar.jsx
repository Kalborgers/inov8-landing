import React from "react";
import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="flex flex-row bg-white h-20 w-full justify-between max-w-[75%] m-auto">
            <Link href="#home">
                <img
                    className="h-full w-52 py-2 pl-4"
                    src="/assets/logo1.png"
                />
            </Link>
            <div className="flex flex-row text-[#403f45] space-x-10 text-3xl pr-7 pt-5">
                <Link href="#about">ABOUT</Link>
                <Link href="#features">FEATURES</Link>
                <Link href="#signup">SIGNUP</Link>
            </div>
        </nav>
    );
}
