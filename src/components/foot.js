import { Descriptions } from 'antd';
import style from '../pages/Product/index.css'
export default function () {
    return (
        <div className={style.footer}>
            <Descriptions title="联系我们" className={style.footerbox}>
                <Descriptions.Item label="电话">+86-0000-0000</Descriptions.Item>
                <Descriptions.Item label="传真">+86-0000-0000</Descriptions.Item>
                <Descriptions.Item label="地址">江苏南京江宁区明月路***号</Descriptions.Item>
                <Descriptions.Item label="版权所有">南京源爱婚庆公司</Descriptions.Item>
                <Descriptions.Item label="技术支持">南京源爱婚庆公司</Descriptions.Item>
                <Descriptions.Item label="ICP备案号：">备**********号</Descriptions.Item>
            </Descriptions>
        </div>
    )
}