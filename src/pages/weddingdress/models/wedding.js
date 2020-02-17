import { WeddingdressList } from '../services/index';
export default {
    namespace: 'wedding',
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
        *fetchweddingList({ payload: props }, { call, put, select }) {
            const { data } = yield call(WeddingdressList, { props });
            yield put({
                type: 'save',
                payload: {
                    currentPage: parseInt(data.packageList.currentPage) * 10,
                    list: data.packageList.list,
                    hotList: data.hotList,
                    marks: data.marks,
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                // 进入'/users'地址触发fetchUserList
                if (pathname === '/weddingdress') {
                    dispatch({ type: 'fetchweddingList', payload: query });
                }
            });
        },

    },
};