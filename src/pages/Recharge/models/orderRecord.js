import { orderRecord } from '@/services/api';

export default {
    namespace: 'orderRecord',

    state: {
        data: {
            list: [],
            header: {},
            pagination: {},
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            const response = yield call(orderRecord, payload);
            yield put({
                type: 'save',
                payload: response,
            });
        },
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                data: action.payload,
            };
        },
    },
};
