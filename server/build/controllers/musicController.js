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
class MusicController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const songs = yield database_1.default.query('SELECT * FROM songs;');
            res.json(songs);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const song = yield database_1.default.query('SELECT * FROM songs WHERE id_song=?', [id]);
            if (song.length > 0) {
                return res.json(song[0]);
            }
            res.status(404).json({ text: 'La canción no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO songs set ?', [req.body]);
            res.json({ message: 'Canción guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM songs WHERE id_song = ?', [id]);
            res.json({ message: 'Canción eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE songs set ? WHERE id_song = ?', [req.body, id]);
            res.json({ message: 'Canción modificada' });
        });
    }
}
const musicController = new MusicController();
exports.default = musicController;
