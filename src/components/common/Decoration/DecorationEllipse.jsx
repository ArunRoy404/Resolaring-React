import ellipse from '@/assets/Images/icon/ellipse.svg'

const DecorationEllipse = ({...props}) => {
    return (
        <div {...props}>
            <img src={ellipse} alt="" />
        </div>
    );
};

export default DecorationEllipse;