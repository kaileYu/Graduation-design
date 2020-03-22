import { getCH } from '../services/index';
export default {
    namespace: 'CHList',
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list };
        }
    },
    effects: {
        *getCHList({ payload: list }, { call, put }) {
            const { data } = yield call(getCH, { list });
            yield put({
                type: 'save',
                payload: {
                    list: data,
                    marks: data.pageProps.marks    
                }
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/qingdian') {
                    dispatch({ type: 'getCHList', payload: query })
                }
            })
        }
    }
}