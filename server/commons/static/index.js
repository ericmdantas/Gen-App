/// <reference path="../../typings/tsd.d.ts" />
System.register(['fs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var fs;
    var StaticDispatcher;
    return {
        setters:[
            function (fs_1) {
                fs = fs_1;
            }],
        execute: function() {
            StaticDispatcher = (function () {
                function StaticDispatcher() {
                }
                StaticDispatcher.sendIndex = function (req, res) {
                    var _root = process.cwd();
                    res.type('.html');
                    fs.createReadStream(_root + '/client/dev/index.html')
                        .pipe(res);
                };
                return StaticDispatcher;
            }());
            exports_1("StaticDispatcher", StaticDispatcher);
        }
    }
});
