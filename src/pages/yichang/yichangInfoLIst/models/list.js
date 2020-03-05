import { getycList } from '../services/index';
export default {
    namespace: 'YCList',
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list };
        }
    },
    effects: {
        *getycInfoList({ payload: list }, { call, put }) {
            const { data } = yield call(getycList, { list });
            yield put({
                type: 'save',
                payload: {
                    list: data
                }
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/query/yichang/yichangInfoList') {
                    dispatch({ type: 'getycInfoList', payload: query.id })
                }
            })
        }
    }
}