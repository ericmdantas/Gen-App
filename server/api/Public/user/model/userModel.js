/// <reference path="../../../typings/main.d.ts" />
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: { type: String,
        required: true
    },
    lastName: { type: String,
        required: true
    },
    email: { type: String,
        unique: true,
        required: true
    },
    salt: { String: String },
    hash: { String: String },
    createdAt: { type: Date, default: Date.now }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserSchema;
