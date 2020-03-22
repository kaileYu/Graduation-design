import { getNanjingList } from '../services/index';
export default {
    namespace: 'nanjinglist',
    state: {
        props: []
    },
    reducers: {
        save(state, { payload: props }) {
            return { ...state, props };
        }
    },
    effects: {
        *getnanjinList({ payload: props }, { call, put }) {
            const { data } = yield call(getNanjingList, { props });
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
                if (pathname === '/nanjin') {
                    dispatch({ type: 'getnanjinList', payload: query })
                }
            })
        }
    }
}