import Home from '@/view/Home.vue';

export default {
    name: "home",
    path: "/",
    component: Home,
    meta: {
        title: "首页"
    },
    children: [
        {
            path: '/test',
            name: "test",
            meta: {
                title: "测试路由",
                bar: false,
            },
            component: () => import('@/view/Test.vue')
        },
        {
            path: '/test2',
            name: "test2",
            meta: {
                title: "测试路由2",
                bar: false,
            },
            component: () => import('@/view/Test2.vue')
        },
    ]
}