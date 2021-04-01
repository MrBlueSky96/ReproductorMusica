"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const musicController_1 = __importDefault(require("../controllers/musicController"));
class MusicRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', musicController_1.default.list);
        //this.router.get('/:id', musicController.getOne);
        this.router.post('/', musicController_1.default.create);
        this.router.delete('/:id', musicController_1.default.delete);
        this.router.put('/:id', musicController_1.default.update);
        this.router.get('/:id', musicController_1.default.listSongsOfCustomPlaylist);
    }
}
const musicRoutes = new MusicRoutes();
exports.default = musicRoutes.router;
