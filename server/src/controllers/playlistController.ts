import { Request, Response } from 'express';
import pool from '../database';

import database from '../database';

class PlaylistController {

    public async list (req: Request, res: Response) {
        const playlists = await pool.query('SELECT * FROM playlists;');
        res.json(playlists);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const playlist = await pool.query('SELECT * FROM playlists WHERE id=?', [id]);
        
        if (playlist.length > 0) {
            return res.json(playlist [0]);
        }

        res.status(404).json({text: 'La playlist no existe'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO playlists set ?', [req.body]);
        res.json({message: 'Playlist guardada'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM playlists WHERE id = ?', [id]);
        res.json({message: 'Playlist eliminada'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE playlists set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Playlist modificada'});
    }

}

const playlistController = new PlaylistController();
export default playlistController;