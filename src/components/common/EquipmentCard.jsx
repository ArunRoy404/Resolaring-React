import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Bookmark, Star } from "lucide-react";
import { Link } from "react-router";

const EquipmentCard = ({ equipment }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden relative group hover:shadow-md transition-shadow duration-300">

            {/* Image */}
            <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-30 md:h-52 object-cover"
            />

            {/* Discount badge */}
            {
                !!equipment?.discount &&
                <div className="absolute top-2 left-2 md:top-6 md:left-6 bg-brand-primary text-white text-[10px] md:text-xs px-2 py-1 rounded">
                    -{equipment.discount}% Discount
                </div>
            }

            {/* Bookmark button */}
            <button className="absolute top-2 right-2 md:top-4 md:right-6 cursor-pointer bg-white w-6 h-6 md:w-9 md:h-9 flex items-center justify-center rounded-full shadow hover:bg-secondary transition">
                <Bookmark color="gray" className="w-4"/>
            </button>


            <div className="p-3 md:p-5 space-y-2 md:space-y-4">
                {/* Seller & Rating */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img
                            src={equipment.seller.image}
                            alt={equipment.seller.name}
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="text-xs md:text-sm font-medium text-[#6A7283]">{equipment.seller.name}</span>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <Star color="orange" fill="orange" className="w-3 md:w-5" />
                        <span>{equipment.rating}</span>
                        <span className="text-gray-400">({equipment.totalRatings})</span>
                    </div>
                </div>

                {/* Equipment Name */}
                <h3 className="font-semibold text-sm md:text-lg text-primary">{equipment.name}</h3>

                {/* Price & View Details */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <div className="flex flex-col">
                        <span className="text-[#6A7283] text-[10px] md:text-xs">Tax excluded</span>
                        <span className="text-primary text- lg:text-2xl font-semibold">{equipment.price} €</span>
                    </div>
                    <Link 
                    to={`/equipments/${equipment?.id}`}
                    >
                        <Button
                            variant="outline"
                            className="group w-full flex text-xs lg:text-base items-center justify-center gap-2 relative overflow-hidden"
                        >
                            <span className="transition-all duration-300 group-hover:mr-4">
                                View Details
                            </span>
                            <ArrowRight
                                className="absolute right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;