(() => {
    'use strict';
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func, key, value){
        Object.definePropery(func, key, {
            'enumerable': false,
            'configurable': true,
            'writable': true,
            'value': value
        })
    };
    delete Function.prototype['toString']; //删除原型链上的toString
    set_native(Function.prototype, 'toString', myToString); //删除之后使用定义的getter方法
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }"); //套娃，保护一下我们定义的toString
    qbvm.safefunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`);
    }; //导出函数到globalThis
}).call(this);