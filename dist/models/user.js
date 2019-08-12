"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    }
});
exports.User = mongoose_1.model('User', userSchema);
