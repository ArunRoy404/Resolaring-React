import { Separator } from "@/components/ui/separator";

const FormSeparator = () => {
    return (
        <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-base text-primary">or</span>
            <Separator className="flex-1" />
        </div>
    );
};

export default FormSeparator;