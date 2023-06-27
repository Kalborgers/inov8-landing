export default function About() {
    return (
        <section
            id="about"
            className="flex w-full items-center justify-end relative z-0 bg-[url('/assets/commute.png')] bg-cover my-24 h-screen"
        >
            <div className="flex flex-col w-1/2 z-20 bg-[#403F45] rounded-xl items-center text-white px-12 py-24 gap-4">
                <p className="font-bold text-5xl">
                    Tired of asking for information on commute routes in Metro
                    Manila?
                </p>
                <p className="text-3xl ml-24">
                    <span className="text-[#FDEC00]">Para Po</span> offers up to
                    date and reliable information on transportation across Metro
                    Manila.
                </p>
            </div>
            <div className="h-full w-full bg-[#403F45]/[.5] z-10 absolute"></div>
        </section>
    );
}
