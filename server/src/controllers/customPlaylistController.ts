import { Request, Response } from 'express';
import pool from '../database';

import database from '../database';

class CustomPlaylistController {

    public async listCustomPlaylists (req: Request, res: Response) {
        const playlists = await pool.query('SELECT * FROM customplaylists;');
        res.json(playlists);
    }


    /*
    public async getOneCustomPlaylist (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const playlist = await pool.query('SELECT * FROM customplaylists WHERE id_customPlaylist=?', [id]);
        
        if (playlist.length > 0) {
            return res.json(playlist [0]);
        }

        res.status(404).json({text: 'La playlist no existe'});
    }*/


    public async createCustomPlaylist (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO customplaylists set ?', [req.body]);
        res.json({message: 'Playlist guardada'});
    }


    public async deleteCustomPlaylist (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM customplaylists WHERE id_customPlaylist = ?', [id]);
        res.json({message: 'Playlist eliminada'});
    }


    public async updateCustomPlaylist (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE customplaylists set ? WHERE id_customPlaylist = ?', [req.body, id]);
        res.json({message: 'Playlist modificada'});
    }


    public async listSongsOfCustomPlaylist (req: Request, res: Response): Promise<any> {
        
        const {id} = req.params;
        const customPlaylist = await pool.query('SELECT * FROM songs,customplaylists inner join song_customplaylist where song_customplaylist.id_FromSong=songs.id_song AND song_customplaylist.id_FromCustomPlaylist=customplaylists.id_customPlaylist AND song_customplaylist.id_FromCustomPlaylist=?;', [id]);
        
        
        return res.json(customPlaylist);

    }

}

const customPlaylistController = new CustomPlaylistController();
export default customPlaylistController;