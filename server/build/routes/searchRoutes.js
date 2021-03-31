"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchController_1 = __importDefault(require("../controllers/searchController"));
class SearchRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', searchController_1.default.list);
        this.router.get('/:searchText', searchController_1.default.searchSongsAndPlaylists);
    }
}
const searchRoutes = new SearchRoutes();
exports.default = searchRoutes.router;
