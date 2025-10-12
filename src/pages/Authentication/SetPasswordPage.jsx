import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CommonInput from "@/components/common/CommonForm/CommonInput";
import FormHeading from "@/components/common/CommonForm/FormHeading";
import { useNavigate } from "react-router";



const formFields = [
    {
        id: "password",
        type: "password",
        label: "New Password",
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

export default function SetPasswordPage() {
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
        navigate('/')
    };

    return (
        <div className=" w-full mx-auto space-y-8">
            <FormHeading
                title={'Set New Password'}
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


                {/* Sign in Button */}
                <Button type="submit" className="w-full py-5">
                    Reset Password
                </Button>
            </form>
        </div>
    );
}
