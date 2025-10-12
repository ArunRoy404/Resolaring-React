import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const CommonInput = ({ id, type, label, errors, register, placeholder, rules }) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="space-y-1 relative">
            <Label
                className="text-primary font-medium text-base"
                htmlFor={id}>
                {label}*
            </Label>

            
            <Input
                id={id}
                type={inputType}
                placeholder={placeholder}
                className={`${errors?.[id] ? "border-red-400 focus-visible:ring-red-400" : ""} pr-10`}
                {...register(id, rules || { required: "This field is required" })}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 text-gray-500 hover:text-gray-700"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            )}
            {errors?.[id] && (
                <p className="text-sm text-red-500 mt-1">{errors[id].message}</p>
            )}
        </div>
    );
};

export default CommonInput;
