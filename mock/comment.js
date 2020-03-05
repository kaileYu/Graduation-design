export default {
    'GET /api/comment': (req, res) => {
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        var comment = {
            "list":
                [
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "手机用户2356",
                        "time": "2019-01-15",
                        "comment": "很好的吧！",
                        "image": [],
                        "count": 5,
                        "like": 35,
                        "dislike": 11
                    },
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "手机用户6802",
                        "time": "2019-10-12",
                        "comment": "衣服很新，款式也很美，试了好久每一件都喜欢，自己又是选择恐惧症，纠结了好久，礼服师也很有耐心陪着我。最终选了这件，拍照片超级好看。爱了爱了！",
                        "image": [
                            { "url": "https://qnm.hunliji.com/Fj9ULZLQ8LUFdKqxoWlaSuCwnaRx?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/FlXr2S7ZpXPdy4bhv3Jro4o3pOaN?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 5,
                        "dislike": 1
                    },
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "手机用户1773",
                        "time": "2019-11-13",
                        "comment": "环境很好的一家礼服馆，一进到房间里面就感觉所有得礼服都是自己所想要的，棒极了穿在身上更美，真的每个女孩一辈子就结婚一次就只能那一次所以一定要挑自己喜欢的而且要好看的。时倾婚纱值得推荐",
                        "image": [
                            { "url": "https://qnm.hunliji.com/Flo1t6u4N7S6XE_d5RTEkRD0XsCH?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/FqYi2hUwpGfkq9aL6WOUI_oP5eNE?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/Ft_Od3FQoJzJv9zCB816O7_ESV8O?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 10,
                        "dislike": 1
                    },
                    {
                        "portrait": "http://qzapp.qlogo.cn/qzapp/100370679/71DFAA7155B8B90AC07428F8D20129C4/100?imageView2/2/w/50/h/50",
                        "name": "时光",
                        "time": "2019-8-29",
                        "comment": "试婚纱的小姐姐的态度甜美，价位方面都可以接受，所以结婚那天跟爱人选择这一套当主纱",
                        "image": [
                            { "url": "https://qnm.hunliji.com/Fg-9l0C-DVFsog2tPQFAiegRXFZ3?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/Fg-9l0C-DVFsog2tPQFAiegRXFZ3?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 15,
                        "dislike": 5
                    },
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "手机用户7944",
                        "time": "2019-8-28",
                        "comment": "衣服款式很多，也特别漂亮，去试婚纱小姐姐还帮我画了美美哒妆容，体验感很棒，加油。",
                        "image": [
                            { "url": "https://qnm.hunliji.com/Ftg7ZD3XFwzqqyEMzxWCBrLr8wtz?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/FqdsynbOJ1IJ2wtpW4A9q6n4zTBL?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 5,
                        "dislike": 1
                    },
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "大宇",
                        "time": "2019-07-12",
                        "comment": "衣服款式很多，婚纱很漂亮，最重要的是都很新。性价比也很高，价位都能接受。位置是在一个小区的别墅内，上下两层都有婚纱。礼服师小姐姐人也很棒，没有一点不耐烦的样子。说话特别好听。极力推荐。",
                        "image": [
                            { "url": "https://qnm.hunliji.com/FkenLdJNUHNzYTW_SC4V5-EucjIX?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/FnjyqG8AqGUur-vIsxet9iz9JKL3?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 50,
                        "dislike": 12
                    },
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "     命",
                        "time": "2019-06-15",
                        "comment": "朋友推荐的礼服馆，款式真的好多哦，也炒鸡漂亮，本来想着自己胖害怕没有穿的，结果小姐姐推荐了一款特别适合我的，上身美美哒，也很显瘦，朋友们都说好看，服务也很到位，选择她们家没毛病...",
                        "image": [
                            { "url": "https://qnm.hunliji.com/FhXjvMAueZsa8QMbwv_UwHhSy6uR?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 25,
                        "dislike": 1
                    },
                    {
                        "portrait": "https://qnm.hunliji.com/o_1d7ds0ebu1cn21lm8148c12qo1rjv9.png",
                        "name": "手机用户3040",
                        "time": "2019-06-12",
                        "comment": "时倾礼服馆必须点个赞，强烈推荐！ 很nice的一家店，很用心在做。 在这之前已经看了三家的婚纱了，老婆一直不满意，这家店试第一件就定下来了，婚纱很干净，很新，很漂酿【重复三遍】。 店里的小姐姐服务态度也是超级好，反复陪你试，加上试妆一共三个多小时很愉快的度过 ，妆媳妇超级满意 ，性价比无敌高的一家店 满意 推荐！",
                        "image": [
                            { "url": "https://qnm.hunliji.com/Fp99FvNKeE5AEiILEJKa8FRFq8jd?imageView2/1/w/160/h/160" },
                            { "url": "https://qnm.hunliji.com/FtH3jbQx2Uvbwkgclt7kJqz-x2i5?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 5,
                        "dislike": 1
                    },
                    {
                        "portrait": "http://qnm.hunliji.com/FrV4cz4V7nXtYwoSmzn9bRyhhmrB?imageView2/2/w/50/h/50",
                        "name": "宝宝处女座",
                        "time": "2019-01-01",
                        "comment": "真的是物超所值，店里的婚纱款式非常的多，和外面很多大众的婚纱不一样的，都很别致，做工也非常细致，特别是上身穿了之后版型非常好，超级显瘦，太想多穿了，喜欢的新娘可以去看看哦。",
                        "image": [
                            { "url": "http://qnm.hunliji.com/FjN-KXWarzMUezeocel1UQoJ6V3_?imageView2/1/w/160/h/160" },
                            { "url": "http://qnm.hunliji.com/FhFqjpN-1lGiH8_LnTZZu69Wu7uX?imageView2/1/w/160/h/160" }
                        ],
                        "count": 5,
                        "like": 5,
                        "dislike": 1
                    },
                    {
                        "portrait": "http://qnm.hunliji.com/FqxYnVjL9cR6Uh3vK01h1rWj7l2W?imageView2/2/w/50/h/50",
                        "name": "。。",
                        "time": "2018-12-14",
                        "comment": "结婚当天是一生中最重要的时刻，所以选择婚礼当天的服装和化妆师很重要。三亚时倾时尚礼服馆高大上。她家的礼服也很漂酿。全新高端很稀饭。化妆师寒姐姐技术棒棒哒。试妆很满意。很开心能定到自己满意的服装和化妆师。非常稀饭。下面上漂酿的图片。大力推荐三亚时倾时尚礼服馆。选择她家绝对婚礼当天给你不一样的私人定制。么么哒。",
                        "image": [
                            { "url": "http://qnm.hunliji.com/FmLXnxOWLRZ_lBVqaWSrXpT2n0vj?imageView2/1/w/160/h/160" },
                            { "url": "http://qnm.hunliji.com/FmLmjtxCZtBsy5hjDWnBON_DXcVZ?imageView2/1/w/160/h/160" },
                            { "url": "http://qnm.hunliji.com/FuJpElJHHmVjNk0-u7skRSXpjcV3?imageView2/1/w/160/h/160" },
                            { "url": "http://qnm.hunliji.com/Ft6ihTHt3AHnne30yfkBUsC-PMKr?imageView2/1/w/160/h/160" },
                            { "url": "http://qnm.hunliji.com/Fg5G9ZdVdcE6Wn7fvrrPDlhUUoat?imageView2/1/w/160/h/160" },
                        ],
                        "count": 5,
                        "like": 15,
                        "dislike": 0
                    }
                ]
        }
        res.end(JSON.stringify(comment));
    }
}