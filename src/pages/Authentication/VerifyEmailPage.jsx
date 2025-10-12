import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router";
import SocialSignin from "@/components/common/CommonForm/SocialSignin";
import FormSeparator from "@/components/common/CommonForm/FormSeparator";
import CommonInput from "@/components/common/CommonForm/CommonInput";
import FormHeading from "@/components/common/CommonForm/FormHeading";


const formFields = [
    {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter your Email",
        rules: { required: "Email is required" },
    },
];


export default function VerifyEmailPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // toast.success("Signin was successful")

        const formattedData = Object.entries(data)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");

        toast.success(formattedData);
    };

    return (
        <div className=" w-full mx-auto space-y-8">
            <FormHeading
                title={'Verify Email'}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {formFields.map((field) => (
                    <CommonInput
                        key={field.id}
                        id={field.id}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        errors={errors}
                        register={register}
                        rules={field.rules}
                    />
                ))}


                {/* Remember Me + Forgot */}
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" {...register("remember")} />
                    <Label htmlFor="remember" className={'text-primary font-medium text-sm'} >
                        I agree to the <span className="underline">terms and policy</span>
                    </Label>
                </div>



                {/* Sign in Button */}
                <Button type="submit" className="w-full py-5">
                    Sign In
                </Button>


                {/* OR Separator */}
                <FormSeparator />

                {/* Social Buttons */}
                <SocialSignin />
            </form>


            {/* Footer */}
            <p className="text-center text-base text-primary font-medium">
                Already have an account?{" "}
                <Link to="/signin" className="hover:underline text-[#B45C3D]">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
