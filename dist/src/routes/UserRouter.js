"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = require("../controller/UsersController");
const logger_1 = require("../utils/logger");
// Router from express
let userRouter = express_1.default.Router();
// http://localhost:8000/api/users?id=624f0b3c3c869ba648e2eb48
userRouter.route('/')
    // GET:
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Obtain a Query Param
    let id = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.id;
    (0, logger_1.LogInfo)(`Query Param: ${id}`);
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    // Obtain Response
    const response = yield controller.getUsers(id);
    // Send to the client the response
    return res.send(response);
}))
    // DELETE:
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    // Obtain a Query Param
    let id = (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.id;
    (0, logger_1.LogInfo)(`Query Param: ${id}`);
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    // Obtain Response
    const response = yield controller.deleteUsers(id);
    // Send to the client the response
    return res.send(response);
}))
    //POST
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e;
    let name = (_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.name;
    let age = (_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.age;
    let email = (_e = req === null || req === void 0 ? void 0 : req.query) === null || _e === void 0 ? void 0 : _e.email;
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    let user = {
        name: name || 'default',
        email: email || 'default email',
        age: age || 'default age'
    };
    // Obtain Response
    const response = yield controller.createUsers(user);
    // Send to the client the response
    return res.send(response);
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g, _h, _j;
    // Obtain a Query Param
    let id = (_f = req === null || req === void 0 ? void 0 : req.query) === null || _f === void 0 ? void 0 : _f.id;
    let name = (_g = req === null || req === void 0 ? void 0 : req.query) === null || _g === void 0 ? void 0 : _g.name;
    let age = (_h = req === null || req === void 0 ? void 0 : req.query) === null || _h === void 0 ? void 0 : _h.age;
    let email = (_j = req === null || req === void 0 ? void 0 : req.query) === null || _j === void 0 ? void 0 : _j.email;
    (0, logger_1.LogInfo)(`Query ParamS: ${id}, ${name}, ${age}, ${email}`);
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    let user = {
        name: name || 'default',
        email: email || 'default email',
        age: age || 'default age'
    };
    // Obtain Response
    const response = yield controller.updateUsers(id, user);
}));
// Export Hello Router
exports.default = userRouter;
//# sourceMappingURL=UserRouter.js.map