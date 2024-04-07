import React from "react";
import {NavLink} from "react-router-dom";

const navigation = [
    { name: 'Home', link: '/'},
    { name: 'Analytics', link: '/analytics' },
    { name: 'Paper', link: '/paper'},
    { name: 'Credits', link: '/credits'}
]


export default function NavbarComponent() {
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-around p-5 lg:px-8" aria-label="Global">

                <div className="flex lg:hidden">
                    <button type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-white">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.link}
                            to={item.link}
                            className={({ isActive, isPending}) =>
                                [
                                    isPending ? "pending" : "",
                                    isActive ? "active bg-gray-50 text-teal-800 rounded-lg" : ""
                                ].join(" text-sm font-semibold leading-4 py-2 px-4 hover:bg-gray-50 hover:text-teal-800 hover:shadow hover:shadow-teal-700 rounded-lg")
                            }
                        >
                            {item.name}
                        </NavLink>

                    ))}
                </div>

            </nav>

        </header>
    )
}