import frameGrid from "@/assets/Images/icon/frameGrid.svg"

const DecorationGrid = ({ reverse = false }) => {
    return (
        <div className="w-full h-full">
            {
                reverse
                    ?
                    <>
                        <img src={frameGrid} className="w-20 h-20 md:w-30 md:h-30 absolute -z-10 top-10 left-10" alt="" />
                        <img src={frameGrid} className="w-20 h-20 md:w-30 md:h-30 absolute -z-10 bottom-10 right-10" alt="" />
                    </>
                    : <>
                        <img src={frameGrid} className="w-20 h-20 md:w-30 md:h-30 absolute -z-10 top-10 right-10" alt="" />
                        <img src={frameGrid} className="w-20 h-20 md:w-30 md:h-30 absolute -z-10 bottom-10 left-10" alt="" />
                    </>
            }
        </div>
    );
};
export default DecorationGrid;