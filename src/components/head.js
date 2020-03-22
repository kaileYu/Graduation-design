import React from 'react'
import { Menu, Icon } from 'antd';
import Style from '../pages/Product/index.css';
import { HashRouter, Link } from 'react-router-dom'
function Login(){
    var Form = document.getElementsByClassName('.Login');
    Form.onclick = function(){
        this.Style.display = 'block'
    }
}
export default function () {
    const { SubMenu } = Menu;
    return (<HashRouter>
        <div>
            <div className={Style.head}>
                <span className={Style.left}>南京源爱婚庆</span>
                <span className={Style.right}>
                    <button onClick = {Login}>登录/注册</button>
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
                        <Menu.Item key="setting:1"><Link to='/nanjin'>南京婚礼套系</Link></Menu.Item>
                        <Menu.Item key="setting:2"><Link to='/yichang'>宜昌婚礼套系</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="1">
                        <Link to="/qingdian"><span>商业庆典</span></Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/danxiang'><span>婚礼单项</span></Link>
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
