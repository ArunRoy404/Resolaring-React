import React from 'react';

const FormHeading = ({ title, subtitle }) => {
    return (
        <div>
            {
                !!title &&
                <h1 className="font-semibold text-primary text-5xl">
                    {title}
                </h1>
            }
            {
                !!subtitle &&
                <p className="mt-2 text-[#6A7283] font-medium text-base">
                    {subtitle}
                </p>
            }
        </div>

    );
};

export default FormHeading;