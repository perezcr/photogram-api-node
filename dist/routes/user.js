"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = express_1.Router();
userRoutes.get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Done'
    });
});
exports.default = userRoutes;
