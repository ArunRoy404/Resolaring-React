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

const FeatureCard = ({ feature }) => {
    return (
        <div
            className='p-6 rounded-2xl relative overflow-hidden'
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

            <div 
            className='absolute -top-4 -left-30'
            >
                <img
                    src={vectors[feature?.color] || vector}
                    alt="" />
            </div>
        </div>
    );
};

export default FeatureCard;