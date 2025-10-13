import vector from '@/assets/Images/vector/Vector.svg'
import vector1 from '@/assets/Images/vector/Vector1.svg'
import vector2 from '@/assets/Images/vector/Vector2.svg'
import vector3 from '@/assets/Images/vector/Vector3.svg'

const vectors = {
    '#B45C3D0F': vector,
    '#F2C00614': vector1,
    '#2ECC710F': vector2,
    '#FAEDFF': vector3,
}

const BenefitsCard = ({ benefit, index }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
        >
            <div
                className='h-full p-6 rounded-2xl relative overflow-hidden hover:shadow-xl'
                style={{ backgroundColor: benefit.color, }}
            >
                {/* icon  */}
                <div>
                    <img src={benefit?.icon} alt="" />
                </div>

                {/* label  */}
                <h1 className='mt-6 mb-4 text-primary font-semibold text-2xl'>
                    {benefit?.label}
                </h1>

                {/* description */}
                <p className='text-[#6A7283] text-base'>
                    {benefit?.description}
                </p>

                <div
                    className='absolute -top-20 -right-30'
                >
                    <img
                        src={vectors[benefit?.color] || vector}
                        alt="" 
                        className='scale-x-[-1]'
                        />
                </div>
            </div>
        </div>
    );
};

export default BenefitsCard;