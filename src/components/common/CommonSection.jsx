import React from "react";

const CommonSection = ({ children, className }) => {
    return (
        <section className={className}>
            <div className={"container mx-auto py-20 px-4"}>
                {children}
            </div>
        </section>
    );
};

export default CommonSection;
