import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'


const Loader = ({ size = '45', speed = '1.75', color = 'black' }) => {
    return (
        <Bouncy
            size={size}
            speed={speed}
            color={color}
        />
    );
};

export default Loader;