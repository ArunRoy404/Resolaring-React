import solar1 from "@/assets/Images/icon/solar1.svg"

const DecorationSolar1 = ({ reverse = false }) => {
    return (
        <div className="w-full h-full">
            {
                reverse
                    ?
                    <>
                        <img src={solar1} className="absolute -z-10 top-10 left-10" alt="" />
                        <img src={solar1} className="absolute -z-10 bottom-10 right-10" alt="" />
                    </>
                    : <>
                        <img src={solar1} className="absolute -z-10 top-10 right-10" alt="" />
                        <img src={solar1} className="absolute -z-10 bottom-10 left-10" alt="" />
                    </>
            }
        </div>
    );
};

export default DecorationSolar1;