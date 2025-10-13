import Shape from '@/assets/Images/vector/cardVector.svg'

const FeatureCard = ({ feature }) => {
    return (
        <div
            className='p-6 rounded-2xl'
            style={{ backgroundColor: feature.color }}
        >
            {/* icon  */}
            <div>
                <img src={feature?.icon} alt="" />
            </div>

            {/* label  */}
            <h1 className='mt-6 mb-4 text-primary font-semibold text-2xl'>
                {feature?.label}
            </h1>

            {/* description */}
            <p className='text-[#6A7283] text-base'>
                {feature?.description}
            </p>
        </div>
    );
};

export default FeatureCard;