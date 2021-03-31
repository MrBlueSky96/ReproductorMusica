import { Request, Response } from 'express';
import pool from '../database';

import database from '../database';

class SearchController {

    public async list (req: Request, res: Response): Promise<any> {
        
        const result = await pool.query('SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist;');
        
        
        return res.json(result);

    }

    public async searchSongsAndPlaylists (req: Request, res: Response): Promise<any> {
        
        //const {searchText} = req.params;
        //const result = await pool.query("SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND (songs.title_song LIKE \'?\' OR songs.autor_song LIKE \'?\' OR playlists.title_playlist LIKE \'?\' OR playlists.autor_playlist LIKE \'?\');", [searchText]);
        //const result = await pool.query('SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND (songs.title_song LIKE ' + '%?%' + ' OR songs.autor_song LIKE ' + '%?%' + ' OR playlists.title_playlist LIKE ' + '%?%' + ' OR playlists.autor_playlist LIKE ' + '%?%' + ');', [searchText]);        
        //let specialQuery = escape("SELECT * FROM playlists WHERE playlists.title_playlist LIKE '%?%'");
        //let com = "SELECT * FROM playlists WHERE playlists.title_playlist LIKE ?";

        //Hay que pasarle el parametro directamente para utilizarlo con LIKE
        //const result = await pool.query("SELECT * FROM playlists WHERE playlists.title_playlist LIKE '%" +req.params.searchText+"%'");
        const result = await pool.query("SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND (songs.title_song LIKE '%" +req.params.searchText+"%'"+" OR songs.autor_song LIKE '%" +req.params.searchText+"%'"+" OR playlists.title_playlist LIKE '%" +req.params.searchText+"%'"+" OR playlists.autor_playlist LIKE '%" +req.params.searchText+"%'"+");");

        return res.json(result);

    }

}

const searchController = new SearchController();
export default searchController;