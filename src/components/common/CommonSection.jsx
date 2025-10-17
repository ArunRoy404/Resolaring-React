import React from "react";

const CommonSection = ({ children, className }) => {
    return (
        <section className={className+' relative overflow-hidden'}>
            <div className={"container mx-auto py-10 md:py-20 px-4"}>
                {children}
            </div>
        </section>
    );
};

export default CommonSection;
