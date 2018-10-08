export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    // authority: ['admin', 'user'],
    routes: [
      // recharge 充值管理
      {
        path: '/recharge',
        name: 'recharge',
        icon: 'dashboard',
        routes: [
          { path: '/', redirect: '/recharge/record' },
          // 充值记录
          {
            path: '/recharge/record',
            name: 'rechargerecord',
            component: './Recharge/Record',
          },
          // 查看详情
          {
            path: '/recharge/record/order-details',
            hideInMenu:true,
            name: 'orderdetails',
            component: './Recharge/OrderDetails',
          },
          // 冲账列表
          {
            path: '/recharge/strike-balance',
            name: 'strikebalance',
            component: './Recharge/StrikeBalance',
          },
          // 冲账充值
          {
            path: '/recharge/strike-balance/recharge-from',
            hideInMenu:true,
            name: 'rechargeform',
            component: './Recharge/RechargeForm',
          },
          // 冲账审核
          {
            path: '/recharge/review',
            name: 'review',
            component: './Recharge/Review',
          },
          // 账单核对列表
          {
            path: '/recharge/bill-check/index',
            name: 'billcheck',
            component: './Recharge/BillCheck/index',
          },
          // 订单操作记录
          {
            path: '/recharge/order-record',
            name: 'orderrecord',
            component: './Recharge/OrderRecord',
          },
        ],
      },
      // diamond M钻管理
      {
        path: '/diamond',
        name: 'diamond',
        icon: 'red-envelope',
        routes: [
          {
            path: '/diamond/Account',
            name: 'account',
            component: './Diamond/Account',
          },
          {
            path: '/diamond/consume',
            name: 'consume',
            component: './Diamond/Consume',
          },
          {
            path: '/diamond/deduct-list',
            name: 'deductlist',
            component: './Diamond/DeductList',
          },
          {
            path: '/diamond/statistics',
            name: 'statistics',
            component: './Diamond/Statistics',
          },
        ],
      },
      // recommend 推介管理
      {
        path: '/recommend',
        name: 'recommend',
        icon: 'deployment-unit',
        routes: [
          {
            path: '/recommend/list',
            name: 'recommendlist',
            component: './Recommend/List',
          },
          {
            path: '/recommend/cancel-list',
            name: 'cancellist',
            component: './Recommend/CancelList',
          },
          {
            path: '/recommend/push-config',
            name: 'pushconfig',
            component: './Recommend/PushConfig',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        hideInMenu:true,
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu:true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
