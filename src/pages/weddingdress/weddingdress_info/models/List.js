import { getInfoList } from '../services/index'
export default {
    namespace: "GetList",
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list }
        }
    },
    effects: {
        *getWeddingdressInfoList({ payload: list }, { call, put }) {
            const { data } = yield call(getInfoList, { list });
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
                if (pathname === '/weddingdress/weddingdressInfoList') {
                    dispatch({ type: 'getWeddingdressInfoList', payload: query.id });
                }
            });
        },
    }
}