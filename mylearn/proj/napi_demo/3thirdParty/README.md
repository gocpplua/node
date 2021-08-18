
To run the example:
1. 生成.so文件
```
gcc -shared -o libhello.so -fPIC hello.cpp
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
- [C++项目中的extern "C" {}](https://www.cnblogs.com/skynet/archive/2010/07/10/1774964.html)

- [node-ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)
- [通过ffi在nodejs中调用动态链接库(.so文件)](https://www.cxyzjd.com/article/zhulin2609/51307598)
- [通过ffi在Node.js中调用动态链接库(.so/.dll文件)](https://cloud.tencent.com/developer/article/1004688)