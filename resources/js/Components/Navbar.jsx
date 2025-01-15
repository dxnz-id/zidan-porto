import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    const links = [
        { label: "Home", url: "/" },
        { label: "Projects", url: "/projects" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" },
    ];

    return (
        <div className="fixed flex top-0 w-full z-50 justify-center">
            <nav className="flex w-full m-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-xl">
                <div className="container mx-5 px-6 py-4 flex justify-between items-center">
                    {/* Links */}
                    <div className="flex">
                        {links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-200 px-4"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="ml-12 px-4 text-gray-600 dark:text-gray-300 focus:outline-none"
                        title="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
