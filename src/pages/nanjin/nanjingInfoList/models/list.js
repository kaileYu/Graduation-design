import { getNJList } from '../services/index';
export default {
    namespace: 'NJList',
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list };
        }
    },
    effects: {
        *getnanjinInfoList({ payload: list }, { call, put }) {
            const { data } = yield call(getNJList, { list });
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
                if (pathname === '/nanjin/nanjingInfoList') {
                    dispatch({ type: 'getnanjinInfoList', payload: query.id })
                }
            })
        }
    }
}