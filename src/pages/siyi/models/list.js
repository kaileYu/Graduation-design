import { getSY } from '../services/index';
export default {
    namespace: 'SYList',
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list };
        }
    },
    effects: {
        *getSYList({ payload: list }, { call, put }) {
            const { data } = yield call(getSY, { list });
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
                if (pathname === '/danxiang') {
                    dispatch({ type: 'getSYList', payload: query })
                }
            })
        }
    }
}