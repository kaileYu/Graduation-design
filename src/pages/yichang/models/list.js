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
                    list: data.props.pageProps.packageList.list,
                    hotList: data.props.pageProps.hotList,
                    topQualityMerchant: data.props.pageProps.topQualityMerchant
                }
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/yichang') {
                    dispatch({ type: 'getyichangList', payload: query })
                }
            })
        }
    }
}