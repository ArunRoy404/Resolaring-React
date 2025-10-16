import { Outlet } from "react-router";
import authImage from "@/assets/Images/authImage.svg"
import AOS from 'aos';
import Lenis from 'lenis';
import { useEffect } from "react";

export default function AuthenticationLayout() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy()
        }
    })


    
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <section className="w-full max-w-[1315px] ">

                <div className="grid md:grid-cols-2 gap-4 lg:gap-12">
                    {/* Left Section - Form */}
                    <div className="flex w-full md:max-w-[560px] flex-col justify-center">
                        <Outlet />
                    </div>

                    {/* Right Section - Image */}
                    <div className="hidden md:block relative overflow-hidden rounded-2xl">
                        <img
                            src={authImage}
                            alt="Sign in"
                            className="max-w- h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
