declare module '*.vue' { // 加上这个 ts 才能正确识别 vue 文件
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}