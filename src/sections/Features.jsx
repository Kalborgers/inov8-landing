import FeatureCard from "@/components/FeatureCard";
import features from "@/data/features.json";

export default function Features() {
    return (
        <section id="features" className="w-full z-50 my-24">
            <div className="bg-[#f3df0f] w-full h-64 absolute -z-20"></div>

            <div className="w-3/4 m-auto space-y-24 z-10 pt-8">
                <div>
                    <p className="text-7xl font-bold">Features</p>
                    <p className="text-3xl font-semibold">
                        The multiple features of Para Po.
                    </p>
                </div>

                <div className="flex flex-row h-5/12 justify-center px-24 space-x-24">
                    {features.slice(0, 3).map((feature, i) => {
                        return <FeatureCard key={i} {...feature} />;
                    })}
                </div>

                <div className="flex flex-row h-5/12 justify-center px-24 space-x-24">
                    {features.slice(3, 5).map((feature, i) => {
                        return <FeatureCard key={i} {...feature} />;
                    })}
                </div>
            </div>
        </section>
    );
}

// {/* CONTENT */}
// <div className="flex flex-col h-full w-full z-20 absolute space-y-10">
// {/* HEADER */}
// <div className="flex flex-col h-2/12 text-[#414046] ml-10">
//     <p className="text-7xl font-bold">Features</p>
//     <p className="text-3xl font-semibold">
//         The multiple features of Para Po.
//     </p>
// </div>

// {/* FIRST ROW 3 FEATURES */}

// {/* SECOND ROW 2 FEATURES */}
// <div className="flex flex-row h-5/12 justify-center px-24 space-x-24">
//     <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
//         <img className="h-1/2 w-full" src="/assets/gps.png" />
//         <div className="flex flex-col h-1/2 w-full items-center justify-between">
//             <p className="text-3xl text-[#F3DF0F]">GPS</p>
//             <p className="text-lg text-center">
//                 Find your way through the map.
//             </p>
//         </div>
//     </div>
//     <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
//         asd
//     </div>
// </div>
// </div>
// {/* BG COLORS 1/3 2/3 white */}
// <div className="flex flex-col h-full w-full">
// <div className="h-1/3 w-full bg-[#F3DF0F] p-1"></div>
// <div className="h-2/3 w-full bg-white p-1"></div>
// </div>
