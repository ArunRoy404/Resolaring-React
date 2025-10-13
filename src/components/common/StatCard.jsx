import React from 'react';
import CountUp from 'react-countup';

const StatCard = ({ stat, index }) => {
    return (
        <div data-aos="fade-up" data-aos-delay={index * 200} >
            <div className={`space-y-2 px-4 flex items-center justify-center ${index % 2 !== 0 ? "border-l border-r" : ''}`}>
                <div className="max-w-[380px] space-y-4">
                    <h3 className="text-5xl font-bold text-brand-primary">
                        <CountUp end={stat.number} duration={2.75} enableScrollSpy /> {stat.label}
                    </h3>
                    <p className="text-black/50 font-medium text-lg text-left">
                        {stat.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatCard;