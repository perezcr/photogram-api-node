"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
// Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// Routes
server.app.use('/user', user_1.default);
// Set up mongoose connection
mongoose_1.default.connect('mongodb://localhost:27017/photogram', {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose_1.default.connection.on('error', err => {
    console.error(`🚫 → ${err.message}`);
});
// Start server
server.start(() => console.log(`Express running → PORT ${server.port} 🔥`));
