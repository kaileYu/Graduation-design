import { getCHList } from '../services/index';
export default {
    namespace: 'CHInfoList',
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list };
        }
    },
    effects: {
        *getCHInfoList({ payload: list }, { call, put }) {
            const { data } = yield call(getCHList, { list });
            yield put({
                type: 'save',
                payload: {
                    list: data,    
                }
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/qingdian/Info') {
                    dispatch({ type: 'getCHInfoList', payload: query })
                }
            })
        }
    }
}