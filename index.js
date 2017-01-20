/**
 * 混合对象属性
 * */
'use strict';
var _ = require('lodash');
function mixin_object(obj, plainObject) {
    // console.log('mixin:', obj, plainObject);
    if (!_.isPlainObject(plainObject))return obj;
    for (var attr in plainObject) {
        var val = plainObject[attr];
        attr = (attr + '').trim();
        var attrs = attr.split('.');
        var now = obj;
        if (attrs.length > 1) {
            for (let i = 0; i < attrs.length - 1; i++) {
                let att = attrs[i];
                if (!_.isPlainObject(now[att])) now[att] = {};
                now = now[att];
            }
        }
        var lastAttr = attrs[attrs.length - 1];
        if (!_.isPlainObject(val) || !_.isPlainObject(now[lastAttr])) {
            // console.log('setattrr:', attrs[attrs.length - 1], val);
            now[lastAttr] = val;
        } else {
            mixin_object(now[lastAttr], val);
        }
    }
    return obj;
}

module.exports = mixin_object;