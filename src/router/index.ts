import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TestRouter from './modules/test';

const routes: Array<RouteRecordRaw> = [
    TestRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
