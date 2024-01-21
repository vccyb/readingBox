vite
npm run dev

node_modules ./bin 下可执行文件

package.json bin 配置的，自动注入到 ./bin 目录下

查找规则

当前目录下的 node_modules/.bin
没有 =》 全局的 node_modules/.bin
没有 =》 环境变量
没有 =》 报错

npm 命令的生命周期

predev
dev
postdev
