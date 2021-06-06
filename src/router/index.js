import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/layout/Login.vue';
import Home from '@/views/layout/Home.vue';
import VChart from '@/components/VCharts.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [{
  name: 'Home',
  path: '/',
  component: Home,
  meta: {
    title: '首页',
  },
  children: [{
    name: 'VCharts',
    path: '/',
    component: VChart,
    meta: {
      title: '首页',
      icon: 'el-icon-house',
      isUser: true,
      id: 1,
    },
  },
  {
    name: 'AllHouse',
    path: '/allhouse',
    component: () => import('@/components/AllHouse.vue'),
    meta: {
      title: '所有房源',
      icon: 'el-icon-s-goods',
      isUser: true,
      id: 2,
    },
  },
  {
    name: 'MyHouse',
    path: '/myhouse',
    component: () => import('@/components/MyHouse.vue'),
    meta: {
      title: '我的发布',
      icon: 'el-icon-user',
      isUser: true,
      id: 3,
    },

  },
  {
    name: 'Message',
    path: '/message',
    component: () => import('@/components/Message.vue'),
    meta: {
      title: '留言板',
      icon: 'el-icon-chat-dot-round',
      isUser: true,
      id: 4,
    },
  },
  {
    name: 'Charts',
    path: '/',
    component: () => import('@/components/Charts.vue'),
    meta: {
      title: '首页',
      icon: 'el-icon-house',
      isUser: false,
      id: 1,
    },
  },
  {
    name: 'UserInfo',
    path: '/userinfo',
    component: () => import('@/components/UserInfo.vue'),
    meta: {
      title: '用户信息',
      icon: 'el-icon-s-custom',
      isUser: false,
      id: 2,
    },
  },
  {
    name: 'Liuyan',
    path: '/liuyanban',
    component: () => import('@/components/Liuyan.vue'),
    meta: {
      title: '留言板',
      icon: 'el-icon-chat-dot-round',
      isUser: false,
      id: 3,
    },
  },
  ],
},
{
  name: 'Login',
  path: '/login',
  component: Login,
  meta: {
    title: '登录页',
  },
},
{
  name: 'Register',
  path: '/register',
  component: () => import('@/views/layout/Register.vue'),
  meta: {
    title: '注册页',
  },
},
];
store.dispatch('getMenuRoutes', routes[0].children);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (to.path === '/register') {
      return next();
    }
    if (!store.state.user.name && !store.state.user.loginId) {
      return next('/login');
    }
    return next();
  }
  return next();
});
