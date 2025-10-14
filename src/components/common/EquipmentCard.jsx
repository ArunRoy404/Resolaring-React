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
                className="w-full h-52 object-cover"
            />

            {/* Discount badge */}
            {
                !!equipment?.discount &&
                <div className="absolute top-6 left-6 bg-brand-primary text-white text-xs px-2 py-1 rounded">
                    -{equipment.discount}% Discount
                </div>
            }

            {/* Bookmark button */}
            <button className="absolute top-4 right-6 cursor-pointer bg-white w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-secondary transition">
                <Bookmark color="gray" size={15} />
            </button>


            <div className="p-5 space-y-4">
                {/* Seller & Rating */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img
                            src={equipment.seller.image}
                            alt={equipment.seller.name}
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm font-medium text-[#6A7283]">{equipment.seller.name}</span>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <Star color="orange" fill="orange" size={18} />
                        <span>{equipment.rating}</span>
                        <span className="text-gray-400">({equipment.totalRatings})</span>
                    </div>
                </div>

                {/* Equipment Name */}
                <h3 className="font-semibold text-lg text-primary">{equipment.name}</h3>

                {/* Price & View Details */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[#6A7283] text-xs">Tax excluded</span>
                        <span className="text-primary text-2xl font-semibold">{equipment.price} €</span>
                    </div>
                    <Link 
                    to={`/equipments/${equipment?.id}`}
                    >
                        <Button
                            variant="outline"
                            className="group flex items-center justify-center gap-2 relative overflow-hidden"
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