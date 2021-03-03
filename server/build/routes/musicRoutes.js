"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MusicRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (rep, res) => res.send('Music'));
    }
}
const musicRoutes = new MusicRoutes();
exports.default = musicRoutes.router;
