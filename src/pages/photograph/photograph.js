import style from './index.css';
import { connect } from 'dva';
import { Empty } from 'antd';
import { HashRouter, Link } from "react-router-dom"
function photograph({ dispatch, props }) {
    function onChangePhotograph(data) {
        dispatch({
            type: 'photo/fetchPhotoList',
            payload: {
                props: data
            }, // 需要传递的信息
        });
    };
    if (props.props.list !== null && props.props.list !== undefined) {
        return (
            <div className={style.photograph} onChange={onChangePhotograph}>
                {/* <div className={style.photograph_nav}>
                    {
                        props.props.marks.map(function (item, i) {
                            return (
                                <ul className={style.pnav} key={i}>{item.name}
                                    <li>不限</li>
                                    {
                                        item.children.map(function (data, i) {
                                            return (<li key={i} value={data.markId} onClick={function selectRender(){
                                                document.getElementsByClassName('photograph').innerHTML = "";
                                                if(data.id===)
                                            }}>{data.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div> */}
                <div className={style.photographbox}>
                    <div className={style.photoList}>
                        {
                            props.props.list.map(function (item, i) {
                                return (
                                    <div className={style.photographlist} key={i}>
                                        <HashRouter>
                                            <img alt="" src={item.coverPath} className={style.image} />
                                            <div className={style.info}>
                                                <Link to="/photograph/photographInfoList"><p className={style.photographtitle}>{item.title}</p></Link>
                                                <p><span className={style.shopArea}>{item.merchant.shopArea}</span>|
                                                    <span className={style.name}>{item.merchant.name}</span></p>
                                                <p><span className={style.showPrice}>￥{item.showPrice}</span>
                                                    <span className={style.marketPrice}>￥{item.marketPrice}</span></p>
                                            </div>
                                        </HashRouter>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={style.hotList}>
                        <div className={style.box}>
                            <h2>同城热卖套餐</h2>
                            {
                                props.props.hotList.map(function (item, i) {
                                    return (
                                        <div key={i} className={style.List}>
                                            <div className={style.imageBox}>
                                                <img alt="" src={item.coverPath} />
                                            </div>
                                            <div className={style.HotListinfo}>
                                                <p className={style.hotListTitle}>{item.title}</p>
                                                <p className={style.hotListName}>{item.merchant.name}</p>
                                                <p className={style.HotListShowPrice}>￥{item.showPrice}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.recommendMerchants}>
                    <h2>同类套餐商家推荐</h2>
                    <div className={style.recommendMerchantsBox}>
                        {
                            props.props.topQualityMerchant.map(function (item, i) {
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
        props: state.photo
    };
}
export default connect(mapStateToProps)(photograph);