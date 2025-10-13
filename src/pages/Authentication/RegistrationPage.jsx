import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import SocialSignin from "@/components/common/CommonForm/SocialSignin";
import FormSeparator from "@/components/common/CommonForm/FormSeparator";
import CommonInput from "@/components/common/CommonForm/CommonInput";


const formFields = [
  {
    id: "name",
    type: "text",
    label: "Name",
    placeholder: "John Doe",
    rules: { required: "Name is required" },
  },
  {
    id: "email",
    type: "email",
    label: "Email",
    placeholder: "you@example.com",
    rules: { required: "Email is required" },
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "••••••••",
    rules: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },
  {
    id: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "••••••••",
    rules: {
      required: "Please confirm your password",
      validate: (value, formValues) =>
        value === formValues.password || "Passwords do not match",
    },
  },
];


export default function RegistrationPage() {

    const navigate = useNavigate()

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
        navigate('/auth/signin')


    };

    return (
        <div className=" w-full mx-auto space-y-8">


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
                    Sign Up
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
