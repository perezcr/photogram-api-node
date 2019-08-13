"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const userRoutes = express_1.Router();
userRoutes.post('/create', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
    };
    user_1.User.create(user)
        .then(userDB => {
        res.json({
            ok: true,
            message: 'Done',
            userDB
        });
    })
        .catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = userRoutes;
