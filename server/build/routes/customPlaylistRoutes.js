"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customPlaylistController_1 = __importDefault(require("../controllers/customPlaylistController"));
class CustomPlaylistRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', customPlaylistController_1.default.listCustomPlaylists);
        this.router.get('/:id', customPlaylistController_1.default.getOneCustomPlaylist);
        this.router.post('/', customPlaylistController_1.default.createCustomPlaylist);
        this.router.delete('/:id', customPlaylistController_1.default.deleteCustomPlaylist);
        this.router.put('/:id', customPlaylistController_1.default.updateCustomPlaylist);
        //this.router.get('/:id', customPlaylistController.listSongsOfCustomPlaylist);
        this.router.post('/:id', customPlaylistController_1.default.insertSongInCustomPlaylist);
    }
}
const customPlaylistRoutes = new CustomPlaylistRoutes();
exports.default = customPlaylistRoutes.router;
