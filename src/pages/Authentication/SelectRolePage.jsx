import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import FormHeading from "@/components/common/CommonForm/FormHeading";


export default function SelectRolePage() {
    const navigate = useNavigate()
    const {
        handleSubmit,
    } = useForm();

    const onSubmit = () => {
        // toast.success("Signin was successful")

        toast.success("Role choosed")
        navigate('/signup')
    };

    return (
        <div className=" w-full mx-auto space-y-8">
            <FormHeading
            title={'Choose account'}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Sign in Button */}
                <Button type="submit" variant={'outline'} className="w-full border-none bg-[#EBECEF] py-5">
                    Buyer
                </Button>

                {/* Sign in Button */}
                <Button type="submit" className="w-full py-5">
                    Seller
                </Button>
            </form>
        </div>
    );
}
