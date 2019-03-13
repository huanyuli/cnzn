import Vue from 'vue'
import Router from 'vue-router'

//登录页面
// import Login from '@/components/login'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/main',
            meta: {
              requireAuth: true, // 判断是否需要登录
            },
            component: resolve => require(['@/components/Index'],resolve) ,
            children: [
                // {path: 'ueditor/ueditor', component: UE, name: 'UE', class: 'fa-plug'},
                {
                    path: 'users/index',
                    component: resolve => require(['@/components/users/index'],resolve),

                },{
                    path: 'users/add',
                    component: resolve => require(['@/components/users/add'],resolve),

                },{
                path: '/Customer',  //客户管理
                component: resolve => require(['@/components/Customer/Customer'],resolve),
                children:[
                  {
                    path: 'material',
                    component: resolve => require(['@/components/Customer/one/material'],resolve),

                  },{
                    path: 'add',
                    component: resolve => require(['@/components/Customer/one/add'],resolve),

                  },
                  {
                    path: 'addAffirm',
                    component: resolve => require(['@/components/Customer/addAffirm'],resolve),
                  },{
                    path: 'details/:one/:two',
                    name:'CustomerDetails',
                    component: resolve => require(['@/components/Customer/one/details'],resolve),
                  },{
                    path: 'succeed',
                    name:"customer_succeed",
                    component: resolve => require(['@/components/Customer/one/succeed'],resolve),
                  },{
                    path: 'Cusedit/:one',
                    name:"customer_edit",
                    component: resolve => require(['@/components/Customer/one/edit'],resolve),
                  },
                  {
                    path: 'oneedit',
                    component: resolve => require(['@/components/Customer/edit'],resolve),
                  },      {
                    path: 'oneadd',
                    component: resolve => require(['@/components/Customer/add'],resolve),

                  },
                ]

              },
              {
                path: '/Contract',  //合同管理菜单
                component: resolve => require(['@/components/Contract/index'],resolve),
                children:[
                  {   //  售电合同 --》合同管理列表
                    path: 'sellElectric',
                    component: resolve => require(['@/components/Contract/one/sellElectric'],resolve),
                  },
                  {   //售电合同 --》合同详情
                    path: 'detail/:one',
                    name:"sellDetail",
                    component: resolve => require(['@/components/Contract/one/detail'],resolve),

                  },
                  {   //售电合同 --》合同详情
                    path: 'showPdf/:one',
                    name:"showPdf",
                    component: resolve => require(['@/components/Contract/one/showPdf'],resolve),

                  },
                  {   //售电合同 --》创建合同
                    path: 'add',
                    component: resolve => require(['@/components/Contract/one/add'],resolve),

                  }
                  ,{  //售电合同 --》创建、保存成功
                    path: 'addSucceed/:btn_id/:cont_id',
                    name:'addSucceed',
                    component: resolve => require(['@/components/Contract/one/addSucceed'],resolve),
                  },
                  { //售电合同 --》暂无合同
                    path: 'notAvailable',
                    component: resolve => require(['@/components/Contract/one/notAvailable'],resolve),
                  },
                  {  //售电合同 --》编辑合同
                    path: 'compile/:one',
                    name:'oneDeit',
                    component: resolve => require(['@/components/Contract/one/compile'],resolve),
                  },
                  {  //购电合同 --》 合同列表
                    path:'purchaseList',
                    component: resolve => require(['@/components/Contract/three/List'],resolve),
                  },
                  { //购电合同 --》 合同详情
                    path:'purchasedeta/:one/:two',
                    name:'detail',
                    component: resolve => require(['@/components/Contract/three/detail'],resolve),
                  },
                  {  //第三方合同 --》 合同列表
                    path:'thirdpartyList',
                    component: resolve => require(['@/components/Contract/two/List'],resolve),
                  },
                  {  //第三方合同 --》 合同详情
                    path:'thirdpartydeta/:one',
                    name:'threeDetail',
                    component: resolve => require(['@/components/Contract/two/threeDetail'],resolve),
                  },
                ]

              },
              {
                path: '/Offer',  //报量环节
                component: resolve => require(['@/components/Offer/offer'],resolve),
                children:[
                  {
                    path: 'tache',
                    component: resolve => require(['@/components/Offer/one/link'],resolve),

                  },{
                    path: 'tacheList',
                    name:"tacheList",
                    component: resolve => require(['@/components/Offer/one/detail'],resolve),

                  },
                  // {
                  //   path: 'clientList',
                  //   name:"clientList",
                  //   component: resolve => require(['@/components/Offer/two/list'],resolve),
                  //
                  // },
                ]
              },
              {
                path: '/declare',  //电量申报
                component: resolve => require(['@/components/declare/index'],resolve),
                children:[
                  {
                    path: 'plan',
                    component: resolve => require(['@/components/declare/two/plan'],resolve),
                  },{
                    path: 'monthly',
                    component: resolve => require(['@/components/declare/three/monthly'],resolve),
                  },{
                    path: 'year',
                    component: resolve => require(['@/components/declare/four/year'],resolve),
                  },
                  {
                    path: 'enough',
                    component: resolve => require(['@/components/declare/one/list'],resolve),
                  },
                  {
                    path: 'clientList',
                    name:"clientList",
                    component: resolve => require(['@/components/declare/five/list'],resolve),

                  },
                ]
              },
              {
                path: '/sys',  //系统管理
                component: resolve => require(['@/components/sys/index'],resolve),
                children:[
                  {
                    path: 'management', //用户管理
                    component: resolve => require(['@/components/sys/one/list'],resolve),
                  },{
                    path: 'role', //角色管理
                    component: resolve => require(['@/components/sys/two/list'],resolve),
                  },
                ]

              },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['@/components/login/index'],resolve)
        }
    ]
})
