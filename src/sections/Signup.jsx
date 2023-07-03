import Script from "next/script";
import { useState } from "react";
import { signupDB } from "@/firebase/db";
import { doc, runTransaction } from "firebase/firestore";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [plan, setPlan] = useState("Free");

    const onClick = () => {
        setDisabled(true);
        signupHandler();
    };

    async function signupHandler(e) {
        try {
            if (firstName == "" || lastName == "" || email == "") {
                alert("A field is empty!");
            } else {
                await runTransaction(signupDB, async (transaction) => {
                    var totalCountRef = doc(signupDB, "SignUps", "TotalCount");
                    //Check for total number of Sign Ups
                    var totalCountDoc = await transaction.get(totalCountRef);
                    if (!totalCountDoc.exists()) {
                        throw "Document does not exist!";
                    }

                    //Increment
                    var id = totalCountDoc.get("num");
                    id++;

                    //Add new Sign up document
                    transaction.set(doc(signupDB, "SignUps", id.toString()), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        plan: plan,
                    });

                    //Update total number of sign ups
                    transaction.update(totalCountRef, {
                        num: id
                    });
                });
                alert("Successfuly Signed Up");
                console.log("Successfully Signed Up!");
            }
            setDisabled(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPlan("Free");
        } catch (e) {
            console.log("Sign Up Failed: ", e);
        }
    }

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
                <div className="w-3/4 m-auto flex flex-row justify-between space-x-8">
                    <div className="w-full flex flex-col space-y-12 items-center">
                        <button className="w-2/3" onClick={() => setPlan("Free")}>
                            <div className={`${plan === "Free" ? "bg-[#F3DF0F] hover:bg-[#C9B90D] " : "bg-white hover:bg-[#CECECE] "} relative rounded-3xl p-12`}>
                                <p className="text-left font-bold text-4xl absolute top-0 left-0 pl-10 pt-4">Free</p>
                                <ul className="list-disc text-left text-md pt-4">
                                    <li>Access to GPS Chatbot and 360 view of locations. </li>
                                    <li>Commute Prices.</li>
                                    <li>Real-time routing with updates based on up-to-date news on transportation.</li>
                                    <li>Ability to post in the community forum and discuss with other people.</li>
                                </ul>
                            </div>
                        </button>
                        <button className="w-2/3" onClick={() => setPlan("Pro")}>
                            <div className={`${plan === "Pro" ? "bg-[#F3DF0F] hover:bg-[#C9B90D] " : "bg-white hover:bg-[#CECECE] "} relative rounded-3xl p-12`}>
                                <p className="text-left font-bold text-4xl absolute top-0 left-0 pl-10 pt-4">Pro <span className="text-sm font-semibold pl-1">PHP 150/month</span></p>
                                <ul className="list-disc text-left text-md pt-4">
                                    <li>All the aforementioned features</li>
                                    <li>Prices and time estimates of alternative routes.</li>
                                    <li>Access to community chat for real time discussions based on location.</li>
                                    <li>Ad-free experience.</li>
                                </ul>
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white rounded-xl align-middle p-12 space-y-10 text-xl">
                        <div className="flex flex-col">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="border"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="border"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="border"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <button
                            className="bg-[#f3df0f] rounded-md px-8 py-2 text-xl font-bold hover:bg-[#C9B90D]"
                            disabled={disabled}
                            onClick={onClick}
                        >
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
