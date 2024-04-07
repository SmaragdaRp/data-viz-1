import React from "react";
import Robot from "../Robot/robot.component";

export default function Analytics() {
    return (
        <div className=' flex flex-row h-full'>
            <div className=" w-full py-6 px-10 text-left ">
                <h2 className="text-4xl font-bold">Statistics in AI</h2>
                <p className="text-xl pt-4 text-justify">
                    Artificial Intelligence is a hot topic these days, sparking numerous
                    discussions about trust and reliance on its capabilities. It is everywhere in businesses and daily
                    life worldwide. People use AI for personal and business reasons,
                    and it is getting increasingly more popular. AI holds significant trust among both
                    consumers and business leaders. While consumers generally
                    trust companies using AI to enhance services, they are more cautious
                    about AI-generated data and search results. Business leaders highly
                    value AI for growth. According to what the chart depicts,
                    there are major benefits for businesses when it comes to using AI.
                </p>

                <Robot/>
            </div>
            <div className="flex w-full py-6 px-10 justify-center items-center">
                {/*https://radixweb.com/blog/artificial-intelligence-statistics*/}
                <img
                    className="rounded-lg"
                    src="https://masterofcode.com/wp-content/uploads/2023/09/Business-Benefits-of-AI-Adoption.png"
                />
            </div>

        </div>
    )
}