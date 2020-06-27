"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const graphql_tools_1 = require("graphql-tools");
const resolversArray = graphql_tools_1.loadFilesSync(path_1.default.join(__dirname, '.'));
exports.default = graphql_tools_1.mergeResolvers(resolversArray);
//# sourceMappingURL=index.js.map