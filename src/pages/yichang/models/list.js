import { getList } from '../services/getList';
export default {
    namespace: 'yichangList',
    state: {
        props: []
    },
    reducers: {
        save(state, { payload: props }) {
            return { ...state, props };
        }
    },
    effects: {
        *getyichangList({ payload: props }, { call, put }) {
            const { data } = yield call(getList, { props });
            yield put({
                type: 'save',
                payload: {
                    list: data.props.packageList.list,
                    hotList: data.props.hotList,
                    topQualityMerchant: data.props.topQualityMerchant
                }
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/quary/yichang') {
                    dispatch({ type: 'getyichangList', payload: query })
                }
            })
        }
    }
}