npm init / pnpm init

版本号:

1.0.0
主版本号 重大更新 2.6.0 3.0.0
次版本号 功能更新 比如 vue 编辑宏 3.1.0
修订号 修复 bug 3.0.1

npm run xxx

npm i vue / npm install vue / pnpm i vue
npm i vue@2.6.0
npm uninstall vue

npm i vue --save == npm i 都是放到 dependencies 只要是 npm5 版本以上

## devependencies 开发依赖

webpack rollup vite 生产不需要呀

npm i vue --save-dev 放到 devependencies npm i vue -xxx/ pnpm i -D xxx

## dependencies

生产上需要的，比如 vue vue-rouer md5

## peerDependencies

对等依赖，你安装我的插件，也要吧 vite 安装 vite plugin
给编写插件的人员提供的，比如写了一个插件，这个插件依赖的版本号

npm get registry
npm config set registry https://registry.npm.taobao.org

npm login
npm publish
