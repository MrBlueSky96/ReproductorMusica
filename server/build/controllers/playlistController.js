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
const database_1 = __importDefault(require("../database"));
class PlaylistController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const playlists = yield database_1.default.query('SELECT * FROM playlists;');
            res.json(playlists);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const playlist = yield database_1.default.query('SELECT * FROM playlists WHERE id=?', [id]);
            if (playlist.length > 0) {
                return res.json(playlist[0]);
            }
            res.status(404).json({ text: 'La playlist no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO playlists set ?', [req.body]);
            res.json({ message: 'Playlist guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM playlists WHERE id = ?', [id]);
            res.json({ message: 'Playlist eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE playlists set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Playlist modificada' });
        });
    }
}
const playlistController = new PlaylistController();
exports.default = playlistController;
