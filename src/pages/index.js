import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Signup from "@/sections/Signup";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import { signupDB } from "@/firebase/db";
import { doc, runTransaction} from "firebase/firestore";

export default function Home() {
    
    useEffect(() => {
        
        // Check if user has visited the site before
        if (document.cookie.indexOf("hasvisited") >= 0) {
            console.log("User has already visited the site.");
        } else {
            document.cookie = "hasvisited";
            try {
                runTransaction(signupDB, async (transaction) => {
                    const visitRef = doc(signupDB, "Visits", "Visits");
                    //get the number of visits
                    var visitDoc = transaction.get(visitRef);
        
                    //Increment
                    var id = (await visitDoc).data().nVisits;
                    id++;
        
                    //Update number of visits
                    transaction.update(visitRef, {
                        nVisits: id
                    });  
                }); 
            } catch(e){
                console.log("Something went wrong!")
            }             
        }
    });
    
    return (
        <main className="w-full text-[#414046]">
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Signup />
            <Footer />
        </main>
    );
}
