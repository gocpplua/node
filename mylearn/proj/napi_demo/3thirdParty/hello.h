
#ifdef __cplusplus
extern "C" {
#endif

  int getNumber();

#ifdef __cplusplus
}
#endif

// 生成.so文件
// gcc -shared -o libhello.so -fPIC hello.cpp