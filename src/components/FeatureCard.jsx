import React from "react";

export default function FeatureCard({ name, description, img }) {
    return (
        <div className="bg-[#403F45] max-w-xs rounded-xl flex flex-col justify-center items-center align-middle p-8 text-center">
            <img src={img} className="max-w-[200px]" />
            <p className="text-3xl text-[#F3DF0F]">{name}</p>
            <p className="text-lg text-center text-white mt-24">
                {description}
            </p>
        </div>
    );
}

{
    /* <div className="flex flex-row h-5/12 justify-between px-24 space-x-24">
            <div className="flex flex-col h-full w-96 bg-[#403F45] rounded-xl">
                <img className="h-1/2 w-full"  />
                <div className="flex flex-col h-1/2 w-full items-center justify-between">
                    <p className="text-3xl text-[#F3DF0F]"></p>
                    <p className="text-lg text-center"></p>
                </div>
            </div>
        </div> */
}
