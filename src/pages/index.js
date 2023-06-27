import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Signup from "@/sections/Signup";
import Footer from "@/components/Footer";

export default function Home() {
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
