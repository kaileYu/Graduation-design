import { getInfoList } from '../services/index'
export default {
    namespace: "PhotoGetList",
    state: {
    },
    reducers: {
        save(state, { payload: list }) {
            return { ...state, list }
        }
    },
    effects: {
        *getPhotographInfoList({ payload: list }, { call, put }) {
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
                if (pathname === '/photograph/photographInfoList') {
                    dispatch({ type: 'getPhotographInfoList', payload: query.id });
                }
            });
        },
    }
}