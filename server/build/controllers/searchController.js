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
class SearchController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist;');
            return res.json(result);
        });
    }
    searchSongsAndPlaylists(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {searchText} = req.params;
            //const result = await pool.query("SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND (songs.title_song LIKE \'?\' OR songs.autor_song LIKE \'?\' OR playlists.title_playlist LIKE \'?\' OR playlists.autor_playlist LIKE \'?\');", [searchText]);
            //const result = await pool.query('SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND (songs.title_song LIKE ' + '%?%' + ' OR songs.autor_song LIKE ' + '%?%' + ' OR playlists.title_playlist LIKE ' + '%?%' + ' OR playlists.autor_playlist LIKE ' + '%?%' + ');', [searchText]);        
            //let specialQuery = escape("SELECT * FROM playlists WHERE playlists.title_playlist LIKE '%?%'");
            //let com = "SELECT * FROM playlists WHERE playlists.title_playlist LIKE ?";
            //Hay que pasarle el parametro directamente para utilizarlo con LIKE
            //const result = await pool.query("SELECT * FROM playlists WHERE playlists.title_playlist LIKE '%" +req.params.searchText+"%'");
            const result = yield database_1.default.query("SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND (songs.title_song LIKE '%" + req.params.searchText + "%'" + " OR songs.autor_song LIKE '%" + req.params.searchText + "%'" + " OR playlists.title_playlist LIKE '%" + req.params.searchText + "%'" + " OR playlists.autor_playlist LIKE '%" + req.params.searchText + "%'" + ");");
            return res.json(result);
        });
    }
}
const searchController = new SearchController();
exports.default = searchController;
