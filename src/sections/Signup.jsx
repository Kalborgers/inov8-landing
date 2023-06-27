import React from "react";

export default function Signup() {
    return (
        <section id="signup" className="flex flex-col w-full text-[#414046]">
            <div className="m-auto text-center space-y-8 my-32">
                <p className="text-5xl font-bold">Sign Up for a Demo!</p>
                <p className="text-3xl font-bold">
                    Have a personalized demonstration of{" "}
                    <span className="text-[#FDEC00]">Para Po</span> with a
                    member of the development team for free!
                </p>
                <p className="text-3xl font-bold">
                    Just fill up the form and a member of the team will get back
                    to you.
                </p>
            </div>
            <div className="w-full bg-[#414046] p-12">
                <div className="w-3/4 m-auto flex flex-row justify-evenly">
                    <div className="flex flex-col justify-center items-center bg-white rounded-xl align-middle p-24 space-y-4">
                        Plans
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white rounded-xl align-middle p-24 space-y-4">
                        <div className="flex flex-col">
                            <label for="firstName">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                className="border"
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label for="lastName">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                className="border"
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label for="email">Email:</label>
                            <input
                                type="text"
                                name="email"
                                className="border"
                            ></input>
                        </div>
                        <button className="bg-[#f3df0f] rounded-md px-8 py-2 text-xl font-bold">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
