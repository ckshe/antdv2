import { stringify } from 'qs';
import request from '@/utils/request';
import host from '@/utils/host';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}



export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}
// 获取验证码
export async function getFakeCaptcha() {
  return request(`${host()}/user/getVerifyCode`);
}
// 用户登录
export async function fakeAccountLogin(params) {
  return request(`${host()}/user/login`, {
    method: 'POST',
    body: params,
  });
}
// 获取充值记录列表
export async function rechargeList(params) {
  return request(`/recharge/recharge_list?${stringify(params)}`);
}
// 获取充值记录详情
export async function getRechargeDetails(params) {
  return request(`/recharge/recharge_list?${stringify(params)}`);
}
// iOS账单核对
export async function iOSList(params) {
  return request(`/order/billAppStoreCheckList?${stringify(params)}`);
}
// 订单操作记录
export async function orderRecord(params) {
  return request(`/orderOperationLog/list?${stringify(params)}`);
}
// M钻流水
export async function accountList(params) {
  return request(`/score/diamondAccountList?${stringify(params)}`);
}