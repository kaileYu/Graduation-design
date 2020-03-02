import style from '../components/style.css'
import React from 'react'
import { Typography } from 'antd';
import Comment from '../components/comment'
// import Foot from '../../components/foot'
export default function () {
    const { Text, Title } = Typography;
    return (
        <div className={style.box}>
            <div className={style.banner}>
                <img className={style.logo} src='http://pic.htwed.com/2019/03/06/64uzrylgacja03vq.jpg!180x180' alt="" />
            </div>
            <div className={style.info}>
                <div className={style.detail}>
                    <Title level={3} className={style.title}>南京源爱婚庆
                        <span>综合评分：</span>
                    </Title><br />
                    <Text>所在城市： 江苏-南京|服务价格：暂无</Text><br />
                    <Text className={style.Text}>地址：江宁区明月路***号</Text><br />
                    <Text id="lianxi" className={style.Text}>联系方式：
                        <span>微博：111</span>
                        <span>邮箱：11111111111@qq.com</span>
                        <span>微信：wx11111111111</span>
                        <span>QQ: 11111111111</span>
                        <span>联系电话: +86-0000-0000</span>
                    </Text>
                </div>
            </div>
            <hr />
            <div>
                <div className={style.story}>
                    <div className={style.stitle}>品牌故事
                        <p className={style.sdetail}>
                            南京源爱婚庆-江宁专业婚礼定制
                            源爱婚礼庆成立于20xx年xx月xx日，位于江苏南京，已为客户策划完成了xxx余场难忘的婚礼，
                            我们是一支集婚庆策划、活动策划、生日派对策划及婚庆用品租凭于一体的专业团队，
                            在同行内绝对是性价比之选的佼佼者，公司也坚持为顾客提供一流的技术、产品、方案、服务的原则，
                            致力于为每对新人都打造一场独一无二今生难忘的定制婚礼。
                            我们坚信只有用心的把客户服务好、为客户提供价值才能体现我们的价值、才能得到客户的认可，
                            您的满意就是我们共同的追求。
                        </p>
                    </div>
                </div>
                <div className={style.show}>作品展示
                    <div className={style.show_box}>
                        <div>
                            <img className={style.pic} src='http://pic.htwed.com/2019/03/06/r3fgh2odmszenxbx.jpg!720x440' alt='' />
                            <p className={style.pic_text}>一定是世界先爱我 我才有幸能爱你</p>
                            <p className={style.pic_botton_text}>西式 小清新 户外 草坪</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.comment_box}>网友评论
                <Comment className={style.comment_box}></Comment>
            </div>
        </div>
    )
}