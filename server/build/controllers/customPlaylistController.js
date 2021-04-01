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
class CustomPlaylistController {
    listCustomPlaylists(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const playlists = yield database_1.default.query('SELECT * FROM customplaylists;');
            res.json(playlists);
        });
    }
    getOneCustomPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const playlist = yield database_1.default.query('SELECT * FROM customplaylists WHERE id_customPlaylist=?', [id]);
            if (playlist.length > 0) {
                return res.json(playlist[0]);
            }
            res.status(404).json({ text: 'La playlist no existe' });
        });
    }
    createCustomPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO customplaylists set ?', [req.body]);
            res.json({ message: 'Playlist guardada' });
        });
    }
    deleteCustomPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM customplaylists WHERE id_customPlaylist = ?', [id]);
            res.json({ message: 'Playlist eliminada' });
        });
    }
    updateCustomPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE customplaylists set ? WHERE id_customPlaylist = ?', [req.body, id]);
            res.json({ message: 'Playlist modificada' });
        });
    }
    /*public async listSongsOfCustomPlaylist (req: Request, res: Response): Promise<any> {
        
        const {id} = req.params;
        const customPlaylist = await pool.query('SELECT * FROM songs,customplaylists inner join song_customplaylist where song_customplaylist.id_FromSong=songs.id_song AND song_customplaylist.id_FromCustomPlaylist=customplaylists.id_customPlaylist AND song_customplaylist.id_FromCustomPlaylist=?;', [id]);
        
        
        return res.json(customPlaylist);

    }*/
    insertSongInCustomPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCustomPlaylist } = req.params;
            yield database_1.default.query('INSERT INTO song_customplaylist set ?', [req.body]);
            //await pool.query('INSERT INTO song_customplaylist (id_FromSong, id_FromCustomPlaylist) VALUES (?, ?);', [req.body, idCustomPlaylist]);
            res.json({ message: 'Canción guardada en la playlist' });
        });
    }
}
const customPlaylistController = new CustomPlaylistController();
exports.default = customPlaylistController;
