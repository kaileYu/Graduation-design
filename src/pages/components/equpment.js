import style from './style.css'
import { Link } from 'react-router-dom'
export default function () {
    return (
        <div>
            <div className={style.equ_box}>
                <div className={style.equ_header}>
                    <h2 className={style.equ_title}>EQUPMENT</h2>
                    <p>案例展示</p>
                </div>
                <div className={style.equ_bannar}>
                    <div className={style.bannerlist}>
                        <img src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/1.jpg' alt='' />
                    </div>
                    <div className={style.bannerlist}>
                        <img src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/2.jpg' alt='' />
                     </div>
                    <div className={style.bannerlist}>
                        <img src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/3.jpg' alt='' />
                    </div>
                    <div className={style.bannerlist}>
                        <img src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/4.jpg' alt='' />
                    </div>
                </div>
                <Link to='/weddingdress'>
                <div className={style.bottom_text}>查看更多</div></Link>
            </div>
        </div>
    )
}