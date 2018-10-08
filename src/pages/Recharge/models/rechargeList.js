import { rechargeList } from '@/services/api';

export default {
  namespace: 'rechargeList',

  state: {
    data: {
      list: [],
      header:{},
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(rechargeList, payload);
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
