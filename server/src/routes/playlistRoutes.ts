import { Router } from 'express';

import playlistController from '../controllers/playlistController';

class PlaylistRoutes {

   public router: Router = Router();

   constructor() {
       this.config();
   }

   config(): void {
       this.router.get('/', playlistController.list);
       this.router.get('/:id', playlistController.getOne);
       this.router.post('/', playlistController.create);
       this.router.delete('/:id', playlistController.delete);
       this.router.put('/:id', playlistController.update);

       //this.router.get('/:id', playlistController.listSongsOfPlaylist);
   }

}

const playlistRoutes = new PlaylistRoutes();
export default playlistRoutes.router;