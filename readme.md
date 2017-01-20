# 混合对象属性
 混合两个对象的属性,假如属性名不重复则不会被覆盖
 例如对象{a:{b:1}}和{a:{c:1}}混合后将变成{a:{b:1,c:1}}

## install
```
npm install mixin-object --save
```

## usage
```
var mixin = require('mixin-object');

var target = mixin(
    {a: {b: 1}},
    {a: {c: 1}}
);

console.log(JSON.stringify(target));
// 将输出: {"a":{"b":1,"c":1}}

```
