import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CommonInput from "@/components/common/CommonForm/CommonInput";
import FormHeading from "@/components/common/CommonForm/FormHeading";
import { useNavigate } from "react-router";


const formFields = [
    {
        id: "code",
        type: "number",
        label: "COde",
        placeholder: "12345678",
        rules: { required: "Code is required" },
    },
];


export default function VerifyCodePage() {
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
        navigate('/set-password')
    };

    return (
        <div className=" w-full mx-auto space-y-8">
            <FormHeading
                title={'We will send verification code on your email ID'}
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
                    Send
                </Button>
            </form>
        </div>
    );
}
