import { Button } from "../ui/button";
import { ArrowRight, Heart, MessagesSquare, Star } from "lucide-react";
import { Link } from "react-router";
import avatar from '@/assets/Images/Avatar.svg'
import EquipmentSelect from "./GalleryComponents/EquipmentSelect";

const EquipmentCardSecondary = ({ equipment, setOpenDialog }) => {

    return (
        <div className="bg-white border flex flex-col border-[#DFE0E4] rounded-lg overflow-hidden relative group hover:shadow-md transition-shadow duration-300">

            {/* Image */}
            <img
                src={equipment?.image}
                alt={equipment?.name}
                className="w-full h-52 object-cover"
            />


            {/* chat and add to favorite */}
            <div className="flex items-center gap-3 absolute top-4 right-6">
                <Link to={`review/${equipment?.id}`}>
                    <button className="cursor-pointer bg-white w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-secondary transition">
                        <MessagesSquare color="gray" size={15} />
                    </button>
                </Link>

                <button className="cursor-pointer bg-white w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-secondary transition">
                    <Heart color="gray" size={15} />
                </button>
            </div>


            <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="space-y-4 flex-1">
                    {/* Seller & menu*/}
                    <div className="flex justify-between items-center">

                        {/* seller  */}
                        <div className="flex items-center gap-2">
                            <img
                                src={avatar}
                                alt={equipment?.seller?.name}
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm font-medium text-[#6A7283]">{equipment?.seller?.name}</span>
                        </div>

                        {/* menu selection button  */}
                        <EquipmentSelect setOpenDialog={setOpenDialog} />
                    </div>

                    {/* Equipment Name */}
                    <h3 className="font-semibold text-lg text-primary">{equipment?.name}</h3>

                    {/* description  */}
                    <p>
                        {equipment?.details}
                    </p>
                </div>


                {/* View Details */}
                <div className="flex-none">
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
export default EquipmentCardSecondary;