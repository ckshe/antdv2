import { getRechargeDetails } from '@/services/api';

export default {
  namespace: 'reacharg',

  state: {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  },

  effects: {
    *fetchInfo(payload, { call, put }) {
      const response = yield call(getRechargeDetails,payload);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
