export default {
    'GET /api/yichang': (req, res) => {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        var yichang = {
            "props": {
                "packageList": {
                    "list": [
                        { "marketPrice": 2500, "showPrice": 1800, "id": 744494, "title": "首席摄影师单机位婚礼跟拍，原片全送，精修40张", "coverPath": "http://qnm.hunliji.com/E8A8D90466633A74FBD6285BF8E3604F", "merchant": { "id": 104654, "name": "艾丽美妆馆", "userId": 1981995, "isBond": 0, "grade": 0, "commentsCount": 8, "shopArea": "天涯镇", "score": "5.0", "goodRate": "1.000" }, "coupon": [], "consultGift": null, "shopGift": null, "orderGift": "赠送价值299元面部水光护肤", "installment": 161.25 },
                        { "marketPrice": 39999, "showPrice": 8888, "id": 726437, "title": "三亚婚礼 | 橙月 纯场景布置 超高性价比之选", "coverPath": "http://qnm.hunliji.com/5D67787BF78850FA75318DC339AED43F", "merchant": { "id": 347459, "name": "三亚微奢高端婚礼策划", "userId": 9857310, "isBond": 0, "grade": 0, "commentsCount": 15, "shopArea": "天涯镇", "score": "5.0", "goodRate": "1.000" }, "coupon": [], "consultGift": { "value": "咨询即送三亚旅行攻略", "status": 1 }, "shopGift": { "value": " 精美电子相册", "status": 1 }, "orderGift": null, "installment": 796.22 },
                        { "marketPrice": 19998, "showPrice": 9999, "id": 564911, "title": "口碑特卖|包接机+包酒店+包邮+包专车自由行", "coverPath": "https://qnm.hunliji.com/8B963CFD2E95B96167CBDFED278A9071.jpg", "merchant": { "id": 348756, "name": "铂爵旅拍", "userId": 10140704, "isBond": 1, "grade": 4, "commentsCount": 319, "shopArea": "吉阳镇", "score": "5.0", "goodRate": "1.000" }, "coupon": [{ "id": 76208, "value": 2000, "title": "2020" }], "consultGift": { "value": "享婚礼纪专属福利特权", "status": 1 }, "shopGift": { "value": "电话预约探店送价值399元礼品", "status": 1 }, "orderGift": null, "installment": 895.74 },
                        { "marketPrice": 11998, "showPrice": 5999, "id": 411812, "title": "【爆款】先拍后付+机票补贴+3天2晚酒店+包邮", "coverPath": "https://qnm.hunliji.com/9731F137F6CE0FA00BA09FFB62994A0D.gif", "merchant": { "id": 337474, "name": "三亚遇见菲林婚纱摄影", "userId": 7616914, "isBond": 1, "grade": 2, "commentsCount": 3123, "shopArea": "河东区街道", "score": "4.9", "goodRate": "1.000" }, "coupon": [{ "id": 71272, "value": 2000, "title": "机票补贴券" }, { "id": 74989, "value": 50, "title": "店铺优惠" }], "consultGift": { "value": "9188元婚嫁大礼包", "status": 1 }, "shopGift": { "value": "2000元机票补贴", "status": 1 }, "orderGift": "补贴2000元机票", "installment": 537.41 },
                        { "marketPrice": 18999, "showPrice": 18999, "id": 668874, "title": "爱情的守望者--20人小型海岛婚礼", "coverPath": "https://qnm.hunliji.com/CEA2081F006A54011AA4B59482BE282C.png", "merchant": { "id": 331397, "name": "三亚爱薇汀婚礼策划婚庆", "userId": 6772527, "isBond": 1, "grade": 3, "commentsCount": 133, "shopArea": "吉阳镇", "score": "5.0", "goodRate": "1.000" }, "coupon": [{ "id": 60676, "value": 580, "title": "满10000减580" }], "consultGift": { "value": "咨询即送新娘妆面试妆", "status": 1 }, "shopGift": { "value": "婚礼照片摆台一个", "status": 1 }, "orderGift": null, "installment": 1701.99 },
                        { "marketPrice": 3200, "showPrice": 2680, "id": 767493, "title": "《特惠套餐》秀禾服主婚纱敬酒服4件伴娘服", "coverPath": "http://qnm.hunliji.com/0F0824BB75CFD9125ACD0B18357B419C", "merchant": { "id": 360683, "name": "三亚时倾时尚礼服馆", "userId": 12258856, "isBond": 0, "grade": 0, "commentsCount": 15, "shopArea": "凤凰镇", "score": "5.0", "goodRate": "1.000" }, "coupon": [], "consultGift": null, "shopGift": null, "orderGift": null, "installment": 240.08 },
                        { "marketPrice": 8999, "showPrice": 5999, "id": 666325, "title": "全包价无套路-海景游艇拍-星级酒店-三亚婚纱照", "coverPath": "https://qnm.hunliji.com/C21794AB4414F4AEA98012CD585F2FF4.jpg", "merchant": { "id": 342243, "name": "三亚后古婚纱摄影", "userId": 8409979, "isBond": 1, "grade": 2, "commentsCount": 4755, "shopArea": "河西区街道", "score": "5.0", "goodRate": "1.000" }, "coupon": [], "consultGift": { "value": "底片加拍10张", "status": 1 }, "shopGift": { "value": "千元婚嫁大礼包", "status": 1 }, "orderGift": null, "installment": 537.41 },
                        { "marketPrice": 10519, "showPrice": 6999, "id": 541848, "title": "情人节特惠】微电影/14服装/酒店/婚纱一价全包", "coverPath": "https://qnm.hunliji.com/ABA1E910203949BEA84E54F6C751D945.gif", "merchant": { "id": 346555, "name": "月下旅拍", "userId": 9483664, "isBond": 1, "grade": 3, "commentsCount": 990, "shopArea": "凤凰镇", "score": "5.0", "goodRate": "1.000" }, "coupon": [{ "id": 77389, "value": 520, "title": "520优惠券" }], "consultGift": { "value": "加拍20张底片", "status": 1 }, "shopGift": { "value": "赠送精美摆台一个", "status": 1 }, "orderGift": "订单专属礼包", "installment": 626.99 },
                        { "marketPrice": 15999, "showPrice": 6999, "id": 271164, "title": "【三亚旅拍】半山半岛+南山基地/包住宿+一价全包", "coverPath": "http://qnm.hunliji.com/274D9645412195A1772957DB0581ED23.jpg", "merchant": { "id": 131665, "name": "提拉米苏环球旅拍", "userId": 4035256, "isBond": 1, "grade": 3, "commentsCount": 3778, "shopArea": "河西区街道", "score": "5.0", "goodRate": "1.000" }, "coupon": [], "consultGift": { "value": "5000元婚嫁大礼包", "status": 1 }, "shopGift": { "value": "免费拍摄证件照+精美照片墙", "status": 1 }, "orderGift": "4999婚嫁大礼包", "installment": 626.99 },
                        { "marketPrice": 6699, "showPrice": 4699, "id": 223033, "title": "【补贴机票1000】游艇+酒店+包邮+送婚纱", "coverPath": "https://qnm.hunliji.com/666C44791BA7D3A65ACC4802749BD441.jpg", "merchant": { "id": 122475, "name": "圣卡罗全球旅拍（三亚店）", "userId": 3036501, "isBond": 0, "grade": 0, "commentsCount": 716, "shopArea": "河东区街道", "score": "5.0", "goodRate": "1.000" }, "coupon": [], "consultGift": null, "shopGift": null, "orderGift": "电子相册+微信请柬", "installment": 420.95 }
                    ],
                    "totalPage": 11071,
                    "totalCount": 221416,
                    "currentPage": "1"
                },
                "hotList":
                    [
                        { "id": 199631, "coverPath": "https://qnm.hunliji.com/5DAB9286A4DA53FC940ECA4F5B83ECFE.gif", "title": "【爆款】一价全包+网红风格+地标鼓浪屿+国潮", "collectorsCount": 4302, "merchant": { "id": 125358, "name": "公主嫁期婚纱摄影" }, "showPrice": 4288, "merchantComment": { "score": "4.9", "goodRate": "0.990" } },
                        { "id": 214509, "coverPath": "https://qnm.hunliji.com/A14401E302075E02D80086C6BFED1FEC.gif", "title": "一对一样片团队拍摄/场景任选/蜜月酒店/产品包邮", "collectorsCount": 6524, "merchant": { "id": 120776, "name": "青岛铂爵风尚婚纱摄影旗舰店" }, "showPrice": 3580, "merchantComment": { "score": "4.9", "goodRate": "0.990" } },
                        { "id": 402434, "coverPath": "https://qnm.hunliji.com/6A441FE63195589A1DFF553B2D09817F.jpg", "title": "热门旅拍精选丨机票补贴1000丨国色佳人婚纱摄影", "collectorsCount": 14575, "merchant": { "id": 332421, "name": "厦门国色佳人婚纱摄影" }, "showPrice": 4998, "merchantComment": { "score": "5.0", "goodRate": "1.000" } },
                        { "id": 161633, "coverPath": "http://qnm.hunliji.com/19944B9FDE0E8D1C113921E1509695EC.gif", "title": "人气推荐【补贴机票】 告白气球 网红水中婚纱", "collectorsCount": 3730, "merchant": { "id": 21291, "name": "三亚米娅婚纱摄影" }, "showPrice": 5999, "merchantComment": { "score": "5.0", "goodRate": "1.000" } },
                        { "id": 342588, "coverPath": "https://qnm.hunliji.com/0F1B19BAC5196D2BBD51EF38BC60A845.gif", "title": "网红地/4天3晚酒店+10套服装+MV花絮+包邮", "collectorsCount": 10204, "merchant": { "id": 4951, "name": "途尚旅拍(三亚站)" }, "showPrice": 4699, "merchantComment": { "score": "5.0", "goodRate": "1.000" } }
                    ],
                "topQualityMerchant":
                    [
                        {
                            "id": 389229,
                            "name": "尚喜宝婚礼一站式策划",
                            "logoPath": "https://qnm.hunliji.com/435D63ABD1D2D733A8C5BB4CF5906CB3.jpg",
                            "commentsCount": 73,
                            "goodRate": "1.000"
                        },
                        { "id": 22313, "name": "糖果婚纱嫁衣馆", "logoPath": "http://qnm.hunliji.com//FohXXBXAuH8PPv4cao7QyY8sXe7Q", "commentsCount": 590, "goodRate": "1.000" },
                        { "id": 13942, "name": "济南海派婚纱摄影", "logoPath": "https://qnm.hunliji.com/A7190BBBFE1F4A3C557B7D6F9777AFA3.jpg", "commentsCount": 610, "goodRate": "1.000" },
                        { "id": 5531, "name": "厦门后古婚纱摄影", "logoPath": "http://qnm.hunliji.com/FnrOysR3y4LmtAyNyIdr8tJej2DX", "commentsCount": 2953, "goodRate": "1.000" },
                        { "id": 384683, "name": "乐玛婚纱摄影（三孝口店）", "logoPath": "https://qnm.hunliji.com/0BA06F416071C57B20BACF83BFDDFFEB.jpg", "commentsCount": 5725, "goodRate": "1.000" }
                    ],
            }

        }
        res.end(JSON.stringify(yichang));
    },
}