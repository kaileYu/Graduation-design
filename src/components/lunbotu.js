import { Carousel } from 'antd';
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import Style from '../pages/Product/index.css'

export default function () {
    const Lunbo = Carousel;
    return (
        <Lunbo autoplay className={Style.lunbo}>
            <div className={Style.box}>
                <img src={b1} alt='' />
            </div>
            <div className={Style.box}>
                <img src={b2} alt='' />
            </div>
            <div className={Style.box}>
                <img src={b3} alt='' />
            </div>
        </Lunbo>
    );
};