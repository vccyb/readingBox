Controller 对象：接收 http 请求，调用 Service，返回响应
Service 对象：实现业务逻辑
Repository 对象：实现对数据库的增删改查

IOC
之前我们手动创建和组装对象不是很麻烦么，我能不能在 class 上声明依赖了啥，然后让工具去分析我声明的依赖关系，根据先后顺序自动把对象创建好了并组装起来呢？

而这种方案为什么叫 IoC 也很容易理解了，本来是手动 new 依赖对象，然后组装起来，现在是声明依赖了啥，等待被注入。

为什么 Controller 是单独的装饰器呢？

因为 Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明。

而 Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。
