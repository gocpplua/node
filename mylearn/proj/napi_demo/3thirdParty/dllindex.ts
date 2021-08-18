var ffi = require('ffi-napi');

var libm = ffi.Library('libm', {
  'ceil': [ 'double', [ 'double' ] ]
});
console.log(libm.ceil(1.5)); // 2


var libm = ffi.Library('libhello', {
  'getNumber': [ 'int', [  ] ]
});

console.log(libm.getNumber()); // 1
