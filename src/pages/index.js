import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Signup from "@/sections/Signup";
import TiredAsking from "@/sections/TiredAsking";

export default function Home() {
    return (
        <main>
            <NavBar />
            <Hero />
            <TiredAsking />
            <Features />
            <Signup />
            <Footer />
        </main>
    );
}
