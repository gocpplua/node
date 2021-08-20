let ffi = require('ffi-napi');

let libm = ffi.Library('libm', {
  'ceil': [ 'double', [ 'double' ] ]
});
console.log(libm.ceil(1.5)); // 2


let libhello = ffi.Library('libhello', {
  'getNumber': [ 'int', [  ] ]
});

console.log(libhello.getNumber()); // 1

let libhh = ffi.Library('libhh', {
  'getNumber': [ 'int', [  ] ]
});

console.log(libhh.getNumber()); // 1


let libhh2 = ffi.Library('libhh2', {
  'getNumber2': [ 'int', [  ] ]
});

console.log(libhh2.getNumber2()); // 11
