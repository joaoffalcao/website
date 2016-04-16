// PhantomJS does not support Function.prototype.bind
// Code origin: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
if (!Function.prototype.bind) {
    /*eslint-disable */
    Function.prototype.bind = function (oThis) {
    /*eslint-enable */
        'use strict';
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs   = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;
        var FNOP    = function () {};
        var fBound  = function () {
            return fToBind.apply(this instanceof FNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        if (this.prototype) {
            // native functions don't have a prototype
            FNOP.prototype = this.prototype;
        }

        fBound.prototype = new FNOP();

        return fBound;
    };
}