import frameGrid from "@/assets/Images/icon/frameGrid.svg"

const DecorationGrid = ({ reverse = false }) => {
    return (
        <div className="w-full h-full">
            {
                reverse
                    ?
                    <>
                        <img src={frameGrid} className="absolute top-10 left-10" alt="" />
                        <img src={frameGrid} className="absolute bottom-10 right-10" alt="" />
                    </>
                    : <>
                        <img src={frameGrid} className="absolute top-10 right-10" alt="" />
                        <img src={frameGrid} className="absolute bottom-10 left-10" alt="" />
                    </>
            }
        </div>
    );
};
export default DecorationGrid;