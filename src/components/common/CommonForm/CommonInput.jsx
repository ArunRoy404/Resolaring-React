import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

const CommonInput = ({ id, type, label, errors, register, placeholder, rules }) => {
    return (
        <div className="space-y-1">
            <Label
                className="text-primary font-medium text-base"
                htmlFor={id}
            >
                {label}*
            </Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                className={errors?.[id] ? "border-red-400 focus-visible:ring-red-400" : ""}
                {...register(id, rules || { required: "This field is required" })}
            />
            {errors?.[id] && (
                <p className="text-sm text-red-500 mt-1">{errors[id].message}</p>
            )}
        </div>
    );
};

export default CommonInput;
