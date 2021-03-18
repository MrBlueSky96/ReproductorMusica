"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlistController_1 = __importDefault(require("../controllers/playlistController"));
class PlaylistRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', playlistController_1.default.list);
        //this.router.get('/:id', playlistController.getOne);
        this.router.post('/', playlistController_1.default.create);
        this.router.delete('/:id', playlistController_1.default.delete);
        this.router.put('/:id', playlistController_1.default.update);
        this.router.get('/:id', playlistController_1.default.listSongsOfPlaylist);
    }
}
const playlistRoutes = new PlaylistRoutes();
exports.default = playlistRoutes.router;
