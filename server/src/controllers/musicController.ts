import { Request, Response } from 'express';
import pool from '../database';

import database from '../database';

class MusicController {

    public async list (req: Request, res: Response) {
        const songs = await pool.query('SELECT * FROM songs;');
        res.json(songs);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const song = await pool.query('SELECT * FROM songs WHERE id_song=?', [id]);
        
        if (song.length > 0) {
            return res.json(song [0]);
        }

        res.status(404).json({text: 'La canción no existe'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO songs set ?', [req.body]);
        res.json({message: 'Canción guardada'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM songs WHERE id_song = ?', [id]);
        res.json({message: 'Canción eliminada'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE songs set ? WHERE id_song = ?', [req.body, id]);
        res.json({message: 'Canción modificada'});
    }

}

const musicController = new MusicController();
export default musicController;