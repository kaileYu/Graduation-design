import { connect } from 'dva';
import { Empty } from "antd";
import style from './index.css'
import { Tabs } from 'antd';
import { Icon } from 'antd';
import Comment from '../../components/comment'
const { TabPane } = Tabs
function photographInfoList({ dispatch, list }) {
    let text = window.location.href;
    let a = text.split("?");
    let id = JSON.parse(a[1].substring(3))
    if (list.list !== null && list.list !== undefined) {
        function data() {
            for (var item of list.list.list) {
                if (item.id === id) {
                    return item.props
                }
            }
            return item.props
        }
        return (
            <div className={style.weddingdressInfoList}>
                <div className={style.head_nav}>
                    <div className={style.imageBox}>
                        <div className={style.Bigimg} ><img id="demoImage" alt="" src={data().pageProps.packageDetail.merchandiseItems[0].mediaPath} /></div>
                        <div className={style.smollImg}>
                            <div className={style.infoimg}><img alt="" src={data().pageProps.packageDetail.merchandiseItems[0].mediaPath} id="imagee1" /></div>
                            <div className={style.infoimg}><img alt="" src={data().pageProps.packageDetail.merchandiseItems[1].mediaPath} id="imagee2" /></div>
                            <div className={style.infoimg}><img alt="" src={data().pageProps.packageDetail.merchandiseItems[2].mediaPath} id="imagee3" /></div>
                            <div className={style.infoimg}><img alt="" src={data().pageProps.packageDetail.merchandiseItems[3].mediaPath} id="imagee4" /></div>
                            <div className={style.infoimg}><img alt="" src={data().pageProps.packageDetail.merchandiseItems[4].mediaPath} id="imagee5" /></div>
                        </div>
                    </div>
                    <div className={style.info}>
                        <p className={style.info_title}>{data().pageProps.current}</p>
                        <p><span className={style.showPrice}>￥{data().pageProps.packageDetail.showPrice}</span>
                            <span className={style.marketPrice}>￥{data().pageProps.packageDetail.marketPrice}</span>
                        </p>
                        <p className={style.dingjing}>可先预付500.00元定金 </p>
                        <p className={style.xiadanyouhui}><span className={style.xiadan}>下单有礼</span><span className={style.youhui}>全款支付优惠104.00元</span></p>
                        <p className={style.huabiefenqi}><span className={style.huabie}>花呗分期</span><span className={style.fenqi}>花呗分期付款：月供<span className={style.price}>￥186.33</span>起</span></p>
                    </div>
                    <div className={style.LogoPath}>
                        <div className={style.LogoBox}>
                            <div className={style.Logo}><a href="https://www.hunliji.com/merchant/detail_360683" target="view_windowgg"><img alt="" src={data().pageProps.packageDetail.merchant.logoPath} /></a></div>
                            <p className={style.LogoPath_name}>{data().pageProps.packageDetail.merchant.name}</p>
                            <p className={style.LogoBox_bottom}> <Icon type="star" theme="filled" style={{ "color": "#ffa800", "fontSize": "12px" }} /><Icon type="star" theme="filled" style={{ "color": "#ffa800", "fontSize": "12px" }} /><Icon type="star" theme="filled" style={{ "color": "#ffa800", "fontSize": "12px" }} /><Icon type="star" theme="filled" style={{ "color": "#ffa800", "fontSize": "12px" }} /><Icon type="star" theme="filled" style={{ "color": "#ffa800", "fontSize": "12px" }} />
                                <span className={style.iconfont}></span><span className={style.commentsCount}>{data().pageProps.packageDetail.merchant.commentsCount}条</span><span className={style.haoping}>100%好评</span></p>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.infoList}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="套餐参数" key="1">
                                <div>
                                    <h3>套餐参数</h3>
                                </div>
                                <div>
                                    {
                                        data().pageProps.packageDetail.setMealInfoValues.map(function (item, i) {
                                            return (<div key={i} className={style.infoList_title}>{item.title}
                                                {
                                                    item.children.map(function (data, i) {
                                                        return (<p key={i} className={style.infolist_list}>
                                                            <span className={style.data_title}>{data.title}</span>
                                                            <span className={style.data_fieldValue}>{data.fieldInfoValue}</span>
                                                        </p>)
                                                    })
                                                }
                                            </div>)
                                        })
                                    }
                                </div>
                            </TabPane>
                            <TabPane tab="图文详情" key="2">
                                <div className={style.imgaeList}>
                                    {
                                        data().pageProps.packageDetail.setMealDetails.map(function (item, i) {
                                            return (
                                                <div key={i} className={style.imgaeList_list}><img alt="" src={item.coverPath} className={style.imgaeList_img} />{item.describe}</div>
                                            )
                                        })
                                    }
                                </div>
                            </TabPane>
                            <TabPane tab="用户评论" key="3">
                                <Comment></Comment>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className={style.hotList}>
                        <div className={style.hotList_remai}><h2>同类热卖</h2></div>
                        {
                            data().pageProps.hotPackages.map(function (item, i) {
                                return (<div key={i} className={style.itemBox}>
                                    <div>
                                        <img alt="" src={item.coverPath} />
                                    </div>
                                    <div className={style.infoList_info}>
                                        <p className={style.hotList_title}>{item.title}</p>
                                        <p className={style.hotList_shopArea}>{item.merchant.name}</p>
                                        <p className={style.hotList_price}>￥{item.showPrice}</p>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
                <div className={style.recommendMerchants}>
                    <h2>同类套餐商家推荐</h2>
                    <div className={style.recommendMerchantsBox}>
                        {
                            data().pageProps.recommendMerchants.map(function (item, i) {
                                return (<div className={style.recommendMerchants_imgae} key={i}>
                                    <img alt="" src={item.logoPath} />
                                    <p className={style.recommendMerchants_name}>{item.name}</p>
                                    <p className={style.commentsCount}>{item.commentsCount}评价<span className={style.goodRate}>{item.goodRate * 100}%</span></p>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>)
    } else {
        return (<Empty />)
    }
}


function mapStateToProps(state) {
    return {
        list: state.PhotoGetList
    };
}
export default connect(mapStateToProps)(photographInfoList);