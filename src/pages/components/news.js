import style from './style.css'
import React from 'react'
import { Tabs } from 'antd';
export default function () {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    };

    return (
        <div className={style.news}>
            <div className={style.news_box}>
                <div className={style.news_header}>
                    <h2 className={style.news_title}>NEWS</h2>
                    <p>新闻资讯</p>
                </div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="公司新闻" key="1">
                        <div className={style.tabpane}>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>    
                            <div>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆最高收费十几万 "金牌"司仪自封</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆有的“金牌”司仪是通过大赛层层选拔的,有的却是婚庆公司自封的;
                                        目前南京婚庆行业无统一标准,新人选择时要“三看” 婚宴价格上涨,新人感叹是“面子”在埋单
                                    </p>
                                </div>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                            </div>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>          
                        </div>
                    </TabPane>
                    <TabPane tab="行业新闻" key="2">
                    <div className={style.tabpane}>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>    
                            <div>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆最高收费十几万 "金牌"司仪自封</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆有的“金牌”司仪是通过大赛层层选拔的,有的却是婚庆公司自封的;
                                        目前南京婚庆行业无统一标准,新人选择时要“三看” 婚宴价格上涨,新人感叹是“面子”在埋单
                                    </p>
                                </div>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                            </div>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>          
                        </div>
                    </TabPane>
                    <TabPane tab="小道新闻" key="3">
                    <div className={style.tabpane}>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>    
                            <div>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆最高收费十几万 "金牌"司仪自封</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆有的“金牌”司仪是通过大赛层层选拔的,有的却是婚庆公司自封的;
                                        目前南京婚庆行业无统一标准,新人选择时要“三看” 婚宴价格上涨,新人感叹是“面子”在埋单
                                    </p>
                                </div>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                            </div>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>          
                        </div>
                    </TabPane>
                    <TabPane tab="身边新闻" key="4">
                    <div className={style.tabpane}>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>    
                            <div>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆最高收费十几万 "金牌"司仪自封</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆有的“金牌”司仪是通过大赛层层选拔的,有的却是婚庆公司自封的;
                                        目前南京婚庆行业无统一标准,新人选择时要“三看” 婚宴价格上涨,新人感叹是“面子”在埋单
                                    </p>
                                </div>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                            </div>
                            <div className={style.tabpanebox}>
                                <img alt='' src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818112807-841414548.jpg'/>
                                <div className={style.tabsText}>
                                    <p className={style.tabsText1}>南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司</p>
                                    <p className={style.tabsText2}> 南京源爱婚庆人才招聘:学播音毕业生看上婚庆公司 
                                        求职者踊跃、招聘方积极,礼仪庆典专场招聘会火爆的场景,
                                        让人不难感受到南京未来的婚庆市场会是一片繁荣。 
                                        婚庆人才招聘会上不乏创意展示。
                                    </p>
                                </div>
                            </div>          
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>

    );
}