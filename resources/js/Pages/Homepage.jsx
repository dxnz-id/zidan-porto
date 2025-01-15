import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Cursor from "@/Components/Cursor";
import ImageGallery from "@/Components/ImageGallery";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Homepage(props) {
    useEffect(() => {
        const textArray = ["freelancer", "photographer"];
        let currentIndex = 0;
        let currentText = "";
        let isDeleting = false;

        const type = () => {
            const fullText = textArray[currentIndex];
            currentText = isDeleting
                ? fullText.substring(0, currentText.length - 1)
                : fullText.substring(0, currentText.length + 1);

            document.getElementById("job").innerText = currentText;

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 5000);
            } else if (isDeleting && currentText === "") {
                setTimeout(() => {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % textArray.length;
                    type();
                }, 500);
            } else {
                const speed = isDeleting ? 50 : 100;
                setTimeout(type, speed);
            }
        };

        type();
    }, []);

    return (
        <>
            <Head title="Portfolio" />
            <Cursor />
            <div className="flex flex-col items-center justify-center text-gray-900 dark:bg-black dark:text-white">
                <Navbar />
                <section
                    className="container h-screen flex items-center justify-center h-full text-center"
                    id="section-1"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Hi, I am{" "}
                            <span className="text-primary">
                                Muhammad La'azidannak Rusda
                            </span>
                        </h1>
                        <p className="mt-4 text-2xl">
                            I am a{" "}
                            <span id="job" className="text-primary"></span>
                        </p>
                    </div>
                </section>
                <div className="h-screen"></div>
                <section
                    className="container flex flex-col min-h-screen bg-info items-center justify-center h-full text-center"
                    id="section-2"
                >
                    <h1 className="text-2xl mb-12 md:text-5xl font-bold">
                        Piece of art
                    </h1>
                    <ImageGallery />
                </section>
                <Footer />
            </div>
        </>
    );
}
