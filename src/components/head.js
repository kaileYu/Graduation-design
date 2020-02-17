import React from 'react'
import { Menu, Icon } from 'antd';
import Style from '../pages/Product/index.css';
import {HashRouter, Link} from 'react-router-dom'
export default function () {
    const { SubMenu } = Menu;
    return (<HashRouter>
        <div>
            <div className={Style.head}>
                <span className={Style.left}>南京源爱婚庆</span>
                <span className={Style.right}>
                    <Icon type="phone" className={Style.Icon} />
                    <span>咨询电话+86-0000-0000</span>
                </span>
                <Menu mode="horizontal" className={Style.nav}>
                    <Menu.Item key="home">
                        <Link to='/'>
                            <Icon type="home" />
                            <span>网站首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to='/about'>
                            <span>关于我们</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <span>婚礼套系</span>
                            </span>
                        }
                    >
                        <Menu.Item key="setting:1"><Link to='/quary/nanjin'>南京婚礼套系</Link></Menu.Item>
                        <Menu.Item key="setting:2"><Link to='/quary/yichang'>宜昌婚礼套系</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="1">
                        <span>商业庆典</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span>婚礼单项</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/weddingdress'><span>精品婚纱</span></Link>  
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/photograph'><span>婚礼摄影</span></Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
        </HashRouter>
    )
}
