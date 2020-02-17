import React from 'react'
import Style from './index.css';
import Lunbo from '../components/lunbotu';
import News from './components/news'
import Equ from './components/equpment'
export default function () {
  return (
    <div>
      <div className={Style.Homebox}>
        <Lunbo className={Style.lunbo}></Lunbo>
        <div className={Style.service}>
          <div className={Style.service_box}>
            <div className={Style.service_title}>
              <h1 className={Style.service_ser}>service</h1>
              <p>服务项目</p>
            </div>
            <div className={Style.service_font}>
              石家庄婚庆公司拥有多名资深的婚礼策划师、主持人、摄影师、摄像师、音响师、灯光师、化妆师及花艺师。
              无论是传统的明清婚礼、汉唐婚礼、浪漫的西式婚礼、个性的主题婚礼以及近期崛起的的现代派婚礼，
              我们优秀的策划团队都将从专业角度出发，运用我们最新的婚礼策划理念及时尚元素，为您精心策划，
              严谨执行，让您轻松享受人生最幸福的时刻。
          </div>
            <h1 className={Style.service_hotline}>
              HOTLINE
            <span>+86-0000-0000</span>
            </h1>
            <div className={Style.page}>
              <span className={Style.page1}><img className={Style.img1} src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818152218-27490008.jpg' alt='' />
                <span className={Style.imgText}>
                  <span className={Style.Text1}>摄像师</span>
                  <span className={Style.Text2}>服务婚庆行业十余年</span>
                </span>
              </span>
              <div className={Style.page_2}>
                <div className={Style.page_21}>
                  <span className={Style.page2}><img className={Style.img1} src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818152225-955349616.jpg' alt='' /></span>
                  <span className={Style.page3}>
                    <span className={Style.imgText2}>
                      <span className={Style.Text1}>新娘妆</span>
                      <span className={Style.Text2}>Bridal makeu</span>
                    </span>
                  </span>
                </div>
                <div className={Style.page_22}>
                  <span className={Style.page4}>
                    <span className={Style.imgText3}>
                      <span className={Style.Text1}>场布</span>
                      <span className={Style.Text2}>photograph</span>
                    </span>
                  </span>
                  <span className={Style.page5}><img className={Style.img1} src='https://www.17sucai.com/preview/691463/2017-01-30/1/images/20150818152229-52585416.jpg' alt='' /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <News />
        <Equ />
      </div>
    </div>
  );
}

