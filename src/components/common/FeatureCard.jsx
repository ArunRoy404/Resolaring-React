import vector from '@/assets/Images/vector/Vector.svg'
import vector1 from '@/assets/Images/vector/Vector1.svg'
import vector2 from '@/assets/Images/vector/Vector2.svg'
import vector3 from '@/assets/Images/vector/Vector3.svg'

const vectors = {
    '#B45C3D0F': vector,
    '#F2C00614': vector1,
    '#2FA75F0F': vector2,
    '#FAEDFF': vector3,
}

const FeatureCard = ({ feature, index }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
        >
            <div
                className='h-full relative overflow-hidden rounded-2xl hover:shadow-md shadow-primary/30 transition-all duration-300'
                style={{ backgroundColor: feature?.color }}
            >
                <div
                    className='h-full p-3 md:p-6 relative overflow-hidden hover:shadow-xl'
                >
                    {/* icon  */}
                    <div>
                        <img src={feature?.icon} alt="" />
                    </div>

                    {/* label  */}
                    <h1 className='mt-3 md:mt-6 mb-2 md:mb-4 text-primary font-semibold tex-2xl md:text-2xl'>
                        {feature?.label}
                    </h1>

                    {/* description */}
                    <p className='text-[#6A7283] text-sm md:text-base'>
                        {feature?.description}
                    </p>
                </div>
                <div
                    className='absolute -top-20 -right-30 -z-1'
                >
                    <img
                        src={vectors[feature?.color] || vector}
                        alt=""
                        className='scale-x-[-1]'
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;