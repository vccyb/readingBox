扁平化

App
A B
C1.0 C1.0

非理想情况下
App
A B
C1.0 C2.0
出现问题 => 单独去安装依赖 B 下眠创建一个 node_modules 安装 C2.0

npm install 的后续流程

1. 检查 config =>
   项目级别的 .npmrc
   用户级别的 .npmrc
   全局的 .npmrc
   npm 内置的.npmrc
2. 检查 package-lock.json
   有 =》 检查和 package.json 是否一致, 不一致优先 package.json，更新 lock，一致的话检查缓存
   有，解压到 node_modules， 没有，下载包，检查完整性，添加到缓存，更新 package-lock.json
   没有 =》 获取包的信息，构建依赖树

package-lock.json
