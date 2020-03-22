import style from './index.css';
import { connect } from 'dva';
import { Empty } from 'antd';
import { Link } from 'react-router-dom'
function CH({ dispatch, list }) {
    if (list.list !== null && list.list !== undefined) {
        return (
            <div className={style.whole}>
                {/* <div className={style.photograph_nav}>
                    {
                        list.list.marks.map(function (item, i) {
                            return (
                                <ul className={style.pnav} key={i}>{item.name}
                                    <li>不限</li>
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
                <div className={style.Box}>
                    <div className={style.infoList}>
                        {
                            list.list.list.pageProps.packageList.list.map(function (item, i) {
                                return (
                                    <div key={i} className={style.List}>
                                        <div className={style.List}>
                                            <div className={style.image}><img alt="" src={item.coverPath} /></div>
                                            <div className={style.info}>
                                                <Link to={{ pathname: '/qingdian/Info', query: { id: item.id } }}><p className={style.title}>{item.title}</p></Link>
                                                <p>
                                                    <span className={style.shopArea}>{item.merchant.shopArea}</span>|<span className={style.name}>{item.merchant.name}</span>
                                                </p>
                                                <p><span className={style.showPrice}>￥{item.showPrice}</span>
                                                    <span className={style.marketPrice}>￥{item.marketPrice}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={style.hotList}>
                        <h2>同城热卖套餐</h2>
                        {
                            list.list.list.pageProps.hotList.map(function (item, i) {
                                return (
                                    <div key={i} className={style.HotListDemo}>
                                        <div >
                                            <img alt="" src={item.coverPath} className={style.image2} />
                                        </div>
                                        <div className={style.HotListinfo}>
                                            <p className={style.hotListTitle} alt={item.title}>{item.title}</p>
                                            <p className={style.hotListName}>{item.merchant.name}</p>
                                            <p className={style.HotListShowPrice}>￥{item.showPrice}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.recommendMerchants}>
                    <h2>同类套餐商家推荐</h2>
                    <div className={style.recommendMerchantsBox}>
                        {
                            list.list.list.pageProps.topQualityMerchant.map(function (item, i) {
                                return (<div className={style.recommendMerchants_imgae} key={i}>
                                    <img alt="" src={item.logoPath} />
                                    <p className={style.recommendMerchants_name}>{item.name}</p>
                                    <p className={style.commentsCount}>{item.commentsCount}评价<span className={style.goodRate}>{item.goodRate * 100}%</span></p>
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
        list: state.CHList
    }
}

export default connect(mapStateToProps)(CH);