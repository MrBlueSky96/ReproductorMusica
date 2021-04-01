import { Router } from 'express';

import customPlaylistController from '../controllers/customPlaylistController';

class CustomPlaylistRoutes {

   public router: Router = Router();

   constructor() {
       this.config();
   }

   config(): void {
       this.router.get('/', customPlaylistController.listCustomPlaylists);
       this.router.get('/:id', customPlaylistController.getOneCustomPlaylist);
       this.router.post('/', customPlaylistController.createCustomPlaylist);
       this.router.delete('/:id', customPlaylistController.deleteCustomPlaylist);
       this.router.put('/:id', customPlaylistController.updateCustomPlaylist);

       //this.router.get('/:id', customPlaylistController.listSongsOfCustomPlaylist);
       this.router.post('/:id', customPlaylistController.insertSongInCustomPlaylist);
   }

}

const customPlaylistRoutes = new CustomPlaylistRoutes();
export default customPlaylistRoutes.router;