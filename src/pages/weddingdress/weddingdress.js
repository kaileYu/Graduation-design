import style from '../components/style.css';
import { connect } from 'dva';
import { Empty } from 'antd';
import wedding from './wedding.css';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import React from 'react'
function weddingdress({ data }, props) {
    const handleClick = () => {
        // this.props.history.push({pathname:'/weddingdress/weddingdressInfoList'})
    }
    if (data.props.list !== null && data.props.list !== undefined) {
        return (
            <div className={style.weddingdress}>
                {/* <div className={style.wedding_nav}>
                        <ul className={style.wnav}>风格
                        <li>不限</li>
                            <li>宫廷</li>
                            <li>男士礼服</li>
                            <li>时尚</li>
                            <li>甜美</li>
                            <li>纪实风</li>
                            <li>简约</li>
                            <li>优雅</li>
                            <li>中式</li>
                        </ul>
                        <ul className={style.wnav}>排序
                        <li>综合排序</li>
                            <li>最新发布</li>
                            <li>收藏最多</li>
                            <li>价格从高到低</li>
                            <li>价格从地到高</li>
                            <li>纪实风</li>
                        </ul>
                    </div> */}
                <div className={style.bigbox}>
                    <div className={style.weddingbox} id='cha' >
                        {
                            data.props.list.map(function (item, i) {
                                // function goToWeddingdressList(id) {
                                //     router.push({pathname:`/weddingdress/weddingdressInfoList`,id:item.id})
                                // }
                                return (
                                    <div key={i} className={style.weddinglist}>
                                        <img alt="" src={item.coverPath} className={style.image} />
                                        <div className={style.info}>
                                            {/* <p className={style.weddingtitle} onClick={goToWeddingdressList(item.id)}> {item.title} </p> */}
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
                <button onClick={handleClick}>asada</button>
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