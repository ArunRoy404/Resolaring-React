import { Outlet } from "react-router";
import authImage from "@/assets/Images/authImage.svg"


export default function AuthenticationLayout() {
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
                    </div>c
                </div>
            </section>
        </main>
    );
}
