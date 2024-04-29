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
const await_to_js_1 = __importDefault(require("./await-to-js"));
const A = () => {
    return Promise.reject("reject");
};
const B = () => {
    return Promise.resolve("resolve");
};
function asyncOp() {
    return __awaiter(this, void 0, void 0, function* () {
        const [error, result] = yield (0, await_to_js_1.default)(A(), { customInfo: "请尽快修复bug" });
        if (error) {
            console.log("error =>", error);
            return;
        }
        console.log("success and result =>", result);
    });
}
asyncOp();
