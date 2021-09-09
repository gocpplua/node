{
  'targets': [
    {
      'target_name': 'evpp_module-native',
      'sources': [ 'src/evpp_module.cc' ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'link_settings': {    # 1. 添加evpp动态库引用
        'library_dirs': ["/usr/local/lib"],
        'libraries': ['-levpp'],
      },
      'cflags!': [ '-fno-exceptions', '-fno-rtti' ], # 2. 添加:'-fno-rtti', 解决cannot use typeid with -fno-rtti
      'cflags_cc!': [ '-fno-exceptions', '-fno-rtti' ], # 3. 添加:'-fno-rtti', 解决cannot use typeid with -fno-rtti
      'xcode_settings': {
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.7'
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      }
    }
  ]
}