/// <reference path="../../../typings/main.d.ts" />
System.register(['mongoose'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose;
    var _todoSchema;
    return {
        setters:[
            function (mongoose_1) {
                mongoose = mongoose_1;
            }],
        execute: function() {
            _todoSchema = {
                todoMessage: { type: String, required: true, trim: true },
                createdAt: { type: Date, default: Date.now }
            };
            exports_1("default",mongoose.Schema(_todoSchema));
        }
    }
});
