import { PhotoList } from '../services/index';
export default {
    namespace: 'photo',
    state: {
        props: [],
    },
    reducers: {
        save(state, { payload: props }) {
            // state.data = state.data.filter(item=>item.id!==id)
            return { ...state, props }
        },
    },
    effects: {
        // 访问接口获取数据 并且保存数据
        *fetchPhotoList({ payload: props }, { call, put, select }) {
            const { data } = yield call(PhotoList, { props });
            yield put({
                type: 'save',
                payload: {
                    list: data.props.list,
                    hotList: data.hotList,
                    marks: data.marks,
                    topQualityMerchant: data.topQualityMerchant
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                // 进入'/users'地址触发fetchUserList
                if (pathname === '/photograph') {
                    dispatch({ type: 'fetchPhotoList', payload: query });
                }
            });
        },

    },
};