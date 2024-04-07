import React from "react";
import my_photo from "../resources/photo_me.jpg"

export default function Home() {
    return (
        <div className=' flex flex-row h-full'>
            <div className=" w-full py-6 px-10 text-left">
                <h2 className="text-5xl font-bold">Smaragda Reppa</h2>
                <h3 className="text-2xl font-medium">Data Visualization Assignment #1</h3>
                <p className="text-xl pt-4 text-justify">
                    I work as a Software Engineer and Research Assistant
                    in the Department of Informatics at the University of Athens.
                    I have a strong interest in both academia and technology.
                    I am currently focusing on the fascinating fields of Artificial Intelligence
                    and Machine Learning while I go on my Master's degree.
                    My journey involves delving deep into these cutting-edge fields,
                    continuously expanding my knowledge and honing my skills.
                    Outside of academics, I unwind by playing tennis and doing Pilates.
                    I enjoy balancing my mental challenges with physical activities for overall well-being.
                </p>

            </div>
            <div className="flex w-full py-6 px-10 justify-center items-center">
                <img
                    alt="my-personal-pic"
                    className="h-[500px] rounded-lg"
                    src={my_photo}
                />
            </div>

        </div>
    )
}