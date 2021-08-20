
To run the example:
1. 生成.so文件
```
gcc -shared -o libhello.so -fPIC hello.cpp

mkdir build 
cd build 
cmake ..
make

```
2、 安装依赖
```
npm install
```

3. 运行
```
ts-node dllindex.ts
```

# 参考文章:
##### [C++项目中的extern "C" {}](https://www.cnblogs.com/skynet/archive/2010/07/10/1774964.html)

##### [node-ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)
##### [通过ffi在nodejs中调用动态链接库(.so文件)](https://www.cxyzjd.com/article/zhulin2609/51307598)
##### [通过ffi在Node.js中调用动态链接库(.so/.dll文件)](https://cloud.tencent.com/developer/article/1004688)
##### [node-ffi使用指南](https://zhuanlan.zhihu.com/p/40526242)
node-ffi是一个用于使用纯JavaScript加载和调用动态库的Node.js插件。它可以用来在不编写任何C ++代码的情况下创建与本地DLL库的绑定。同时它负责处理跨JavaScript和C的类型转换。

与Node.js Addons相比，此方法有如下优点：
1. 不需要源代码。
2. 不需要每次重编译`node`，`Node.js Addons`引用的`.node`会有文件锁，会对`electron应用热更新造成麻烦。
3. 不要求开发者编写C代码，但是仍要求开发者具有一定C的知识。

缺点是：
1. 性能有折损
2. 类似其他语言的FFI调试，此方法近似黑盒调用，差错比较困难。

##### [在 NodeJS 中与 C++ 代码通信](https://zhuanlan.zhihu.com/p/89174306)
> 在 NodeJS 中，和其他语言编写的代码通信主要有两种方案：
- 使用 AddOn 技术，使用 C++为 NodeJS 编写一个拓展，然后在代码中调用其他语言所编写的源码 or 动态库
- 使用 FFI（Foreign Function Interface）技术，直接在 Node 中引入其他语言所编写的动态链接库

两种技术对比:

AddOn 技术比较通用，它可以使用 C++代码来拓展 Node 的行为，很多库都是使用这种方式来完成一些比较底层操作（比如和操作系统的一些通信）的。但是它写起来比较麻烦，要编写一个 C++项目，还要按照 NodeJS 的规范 export 相应的函数，而且每次安装的时候都需要进行编译（以适应本地 Node 的版本）。如果只是调用一个 DLL，那就还需要在项目里重新包装一遍 DLL 的接口。

FFI 技术，限制就会比较多,首先，它只能调用其他动态库，如果你想使用 C/C++完成更多功能的话，还需要再封装一层 DLL，另外，它只支持_cdecl调用约定（也就是 DLL 在导出的时候一定要标记用_cdecl编译命令），不支持_stdcall或者_fastcall调用。但是调用起来就会很方便，可以直接在 JS 代码中声明 DLL 的接口就可以了。

综上比较，如果只调用第三方 DLL（而且恰好是_cdecl导出），使用 FFI 就再合适不过了（虽然性能可能会有一定的损失，而且调试起来会有困难）。

其实，从理论上来讲，FFI 也是基于 AddOn 技术的，只是它可以帮你把在 JS 中定义的接口直接转换成 C 语言的接口，并利用 NodeJS 的 Buffer 内存，将其同载入的 DLL 共享。当然由于 FFI 的这种通用性，也导致了一定的性能损失。

##### [如何在JavaScript中调用C++动态链接库](https://xinyuehtx.github.io/post/%E5%A6%82%E4%BD%95%E5%9C%A8JavaScript%E4%B8%AD%E8%B0%83%E7%94%A8C++%E5%8A%A8%E6%80%81%E9%93%BE%E6%8E%A5%E5%BA%93.html)