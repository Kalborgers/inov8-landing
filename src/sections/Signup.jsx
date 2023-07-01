import Script from "next/script";
import { useState } from "react";
import { signupDB } from "@/firebase/db";
import { doc, runTransaction } from "firebase/firestore";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
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
                        email: email
                    });

                    //Update total number of sign ups
                    transaction.update(totalCountRef, {
                        num: id
                    });
                });
                alert("Successfuly Signed Up");
                console.log("Successfully Signed Up!");
            }
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
                <div className="w-3/4 m-auto flex flex-row justify-evenly">
                    <div className="flex flex-col justify-center items-center bg-white rounded-xl align-middle p-24 space-y-4">
                        Plans
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white rounded-xl align-middle p-24 space-y-4">
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
                            className="bg-[#f3df0f] rounded-md px-8 py-2 text-xl font-bold"
                            onClick={signupHandler}
                        >
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
