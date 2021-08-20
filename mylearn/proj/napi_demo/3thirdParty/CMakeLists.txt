cmake_minimum_required(VERSION 3.0.0)
project(hh VERSION 0.1.0)

include(CTest)
enable_testing()

add_library(hh SHARED hh.cpp)
add_library(hh2 SHARED hh2.cpp) # SHARED 生成动态库.so   不加就生成静态库
set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)
message(${CMAKE_COMMAND})

add_custom_command(
  TARGET hh
  POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy ./libhh.so ../ 
  COMMAND ${CMAKE_COMMAND} -E remove ./libhh.so)

  add_custom_command(
  TARGET hh2
  POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy ./libhh2.so ../ 
  COMMAND ${CMAKE_COMMAND} -E remove ./libhh2.so)
