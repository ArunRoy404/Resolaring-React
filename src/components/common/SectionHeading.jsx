import React from 'react';

const SectionHeading = ({ children }) => {
    return (
        <h2 className="text-5xl font-semibold text-center text-primary mb-16">
            {children}
        </h2>
    );
};

export default SectionHeading;