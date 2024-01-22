commonjs
es module

common.js this 文件
es module this undefined

cjs 运行时，
支持 if(true){require('./a')}，如果文件很大
esm 编译时
不支持

cjs 不可以 tree shaking
esm 可以

import 动态引入？、 import 函数模式
import(./xxx.js) => 返回一个 promise
