import style from '../components/style.css';
import { connect } from 'dva';
import { Empty } from 'antd';
import wedding from './wedding.css';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import React from 'react'
function weddingdress({ data }) {
    if (data.props.list !== null && data.props.list !== undefined) {
        return (
            <div className={style.weddingdress}>
                {/* <div className={wedding.photograph_nav}>
                    {
                        data.props.marks.map(function (item, i) {
                            return (
                                <ul className={wedding.pnav} key={i}>{item.name}
                                    <li className={wedding.actived} class="actived">不限</li>
                                    {
                                        item.children.map(function (data, i) {
                                            return (<li key={i} value={data.markId}>{data.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div> */}
                <div className={style.bigbox}>
                    <div className={style.weddingbox} id='cha' >
                        {
                            data.props.list.map(function (item, i) {
                                return (
                                    <div key={i} className={style.weddinglist}>
                                        <img alt="" src={item.coverPath} className={style.image} />
                                        <div className={style.info}>
                                            <Link to={{ pathname: '/weddingdress/weddingdressInfoList', query: { id: item.id } }}><p className={style.weddingtitle}> {item.title} </p></Link>
                                            <p><span className={style.shopArea}>{item.merchant.shopArea}</span>|
                                                <span className={style.name}>{item.merchant.name}</span></p>
                                            <p><span className={style.showPrice}>￥{item.showPrice}</span>
                                                <span className={style.marketPrice}>￥{item.marketPrice}</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={style.hotListBox}>
                        <div className={wedding.box}>
                            <h2>同城热卖套餐</h2>
                            {
                                data.props.hotList.map(function (item, i) {
                                    return (
                                        <div key={i} className={wedding.hotList}>
                                            <div className={wedding.imageBox}><img alt="" src={item.coverPath} /></div>
                                            <div className={wedding.info}>
                                                <p className={wedding.hotListTitle}>{item.title}</p>
                                                <p className={wedding.hotListName}>{item.merchant.name}</p>
                                                <p className={wedding.showPrice}>￥{item.showPrice}</p>
                                            </div>
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.recommendMerchants}>
                    <h2>同类套餐商家推荐</h2>
                    <div className={wedding.recommendMerchantsBox}>
                        {
                            data.props.topQualityMerchant.map(function (item, i) {
                                return (<div className={wedding.recommendMerchants_imgae} key={i}>
                                    <img alt="" src={item.logoPath} />
                                    <p className={wedding.recommendMerchants_name}>{item.name}</p>
                                    <p className={wedding.commentsCount}>{item.commentsCount}评价<span className={style.goodRate}>{item.goodRate * 100}%</span></p>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Empty />
        )
    }
}
function mapStateToProps(state) {
    return {
        data: state.wedding
    };
}
export default connect(mapStateToProps)(withRouter(weddingdress));