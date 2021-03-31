import { Request, Response } from 'express';
import pool from '../database';

import database from '../database';

class PlaylistController {

    public async list (req: Request, res: Response) {
        const playlists = await pool.query('SELECT * FROM playlists;');
        res.json(playlists);
    }


    /*public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const playlist = await pool.query('SELECT * FROM playlists WHERE id_playlist=?', [id]);
        
        if (playlist.length > 0) {
            return res.json(playlist [0]);
        }

        res.status(404).json({text: 'La playlist no existe'});
    }*/


    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO playlists set ?', [req.body]);
        res.json({message: 'Playlist guardada'});
    }


    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM playlists WHERE id_playlist = ?', [id]);
        res.json({message: 'Playlist eliminada'});
    }


    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE playlists set ? WHERE id_playlist = ?', [req.body, id]);
        res.json({message: 'Playlist modificada'});
    }


    public async listSongsOfPlaylist (req: Request, res: Response): Promise<any> {
        
        const {id} = req.params;
        const playlist = await pool.query('SELECT * FROM songs,playlists inner join song_playlist where song_playlist.id_FromSong=songs.id_song AND song_playlist.id_FromPlaylist=playlists.id_playlist AND song_playlist.id_FromPlaylist=?;', [id]);
        
        
        return res.json(playlist);

    }

}

const playlistController = new PlaylistController();
export default playlistController;