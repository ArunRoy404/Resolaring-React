import React from "react";
import { Button } from "@/components/ui/button";
import bannerImage from '@/assets/Images/BannerImage.jpg'
import { ArrowRight } from "lucide-react";
import CommonSection from "../common/CommonSection";

const BannerSection = () => {
    return (
        <CommonSection>
            <div>
                <div className="relative py-20 lg:py-32 w-full rounded-4xl overflow-hidden flex items-center">
                    {/* Background Image */}
                    <img
                        src={bannerImage}
                        alt="Banner Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071431] to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 md:px-16 max-w-[900px] text-white">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                            Empowering Sustainability Through Solar Recycling
                        </h1>
                        <p className="text-white md:text-2xl mt-6 mb-10">
                            Buy and sell quality second-hand solar equipment to save money, reduce waste, and promote a greener future.
                        </p>

                        {/* buttons  */}
                        <div className="flex gap-4">
                            <Button
                            className={'hover:bg-secondary'}
                            >
                                Browse Marketplace
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="text-white border-white bg-white/10"
                            >
                                Sell Your Equipment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </CommonSection>
    );
};

export default BannerSection;
