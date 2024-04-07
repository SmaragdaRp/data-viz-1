import React from "react";
import Robot from "../Robot/robot.component";

export default function Credits() {
    return (
        <div className=' flex flex-row h-full'>
            <div className=" w-full py-6 px-12 text-left space-y-6">
                <h2 className="text-4xl font-bold">Credits</h2>
                <ul className="text-xl space-y-2 list-inside list-disc">
                    <li>
                        Built with
                        <a href="https://react.dev/" className="font-bold hover:text-blue-500"> React </a>
                    </li>
                    <li>
                        Styled with
                        <a href="https://tailwindcss.com/" className="font-bold hover:text-blue-500"> Tailwind CSS </a>
                    </li>
                    <li>Analytics Image from
                        <a href="https://masterofcode.com/blog/ai-statistics#Statistics_About_Artificial_Intelligence_Technologies"
                           className="font-bold hover:text-blue-500"> masterofcode.com </a>
                    </li>
                    <li>
                        SVG:
                        <a href="https://www.projectlist.com" className="font-bold hover:text-blue-500"> Project
                            List </a>
                        robot mascot.
                        <a href="https://dribbble.com/shots/1675390-Project-List-Robot?list=following&offset=1"
                           className="font-bold hover:text-blue-500"> Vector</a> by
                        <a href="https://dribbble.com/johnmears" className="font-bold hover:text-blue-500"> John
                            Mears</a>
                    </li>
                    <li>Paper:
                        <a href="https://masterofcode.com/blog/ai-statistics#Statistics_About_Artificial_Intelligence_Technologies"
                           className="font-bold hover:text-blue-500"> Perception! Immersion! Empowerment! Superpowers as Inspiration for Visualization </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}