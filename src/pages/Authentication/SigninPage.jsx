import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router";
import authImage from "@/assets/Images/authImage.svg"
import appleIcon from '@/components/common/svg/iconsApple.svg'
import googleIcon from '@/components/common/svg/iconsGoogle.svg'

export default function SigninPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        toast.success("Signin was successful")
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <section className="w-full max-w-[1315px] grid md:grid-cols-2 py-36 gap-12">
                {/* Left Section - Form */}
                <div className="flex max-w-[560px] flex-col justify-center">
                    <div className=" w-full mx-auto space-y-8">
                        <div>
                            <h1 className="font-semibold text-primary text-5xl">
                                Welcome back !
                            </h1>
                            <p className="mt-2 text-[#6A7283] font-medium text-base">
                                Enter your Credentials to access your account
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email */}
                            <div className="space-y-2">
                                <Label className={'text-primary font-medium text-base'} htmlFor="email">Email*</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={`${errors.email ? 'border-red-400' : ''}`}
                                    {...register("email", { required: "Email is required" })}
                                />
                                {/* {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                )} */}
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label className={'text-primary font-medium text-base'} htmlFor="password">Password*</Label>
                                    <Link
                                        to={'/forgot-password'}
                                        href="#"
                                        className="text-sm text-[#B45C3D] underline"
                                    >
                                        Forgot password
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className={`${errors.password ? 'border-red-400' : ''}`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                />
                                {/* {errors.password && (
                                    <p className="text-sm text-red-500">{errors.password.message}</p>
                                )} */}
                            </div>

                            {/* Remember Me + Forgot */}
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" {...register("remember")} />
                                <Label htmlFor="remember" className={'text-primary font-medium text-sm'} >
                                    Remember me
                                </Label>
                            </div>


                            {/* Sign in Button */}
                            <Button type="submit" className="w-full py-5">
                                Sign In
                            </Button>

                            {/* OR Separator */}
                            <div className="flex items-center gap-3">
                                <Separator className="flex-1" />
                                <span className="text-base text-primary">or</span>
                                <Separator className="flex-1" />
                            </div>

                            {/* Social Buttons */}
                            <div className="flex gap-3 justify-center">
                                <div className="space-x-8">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="flex-1 h-9 text-xs font-medium text-primary justify-center gap-2 py-5 border-[#DFE0E4]"
                                    >

                                        <img
                                            src={googleIcon}
                                            alt="appleIcon"
                                            className="w-4 h-4"
                                        />
                                        Sign in with Google
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="flex-1 h-9 text-xs font-medium text-primary justify-center gap-2 py-5 border-[#DFE0E4]"
                                    >
                                        <img
                                            src={appleIcon}
                                            alt="appleIcon"
                                            className="w-4 h-4"
                                        />
                                        sign in with Apple
                                    </Button>
                                </div>
                            </div>
                        </form>

                        {/* Footer */}
                        <p className="text-center text-base text-primary font-medium">
                            Don’t have an account?{" "}
                            <Link to="/auth/signup" className="hover:underline text-[#B45C3D]">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="hidden md:block relative overflow-hidden rounded-2xl">
                    <img
                        src={authImage}
                        alt="Sign in"
                        className="max-w- h-full object-cover"
                    />
                </div>
            </section>
        </main>
    );
}
