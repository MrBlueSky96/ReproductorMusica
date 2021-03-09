import { Router } from 'express';

import musicController from '../controllers/musicController';

class MusicRoutes {

   public router: Router = Router();

   constructor() {
       this.config();
   }

   config(): void {
       this.router.get('/', musicController.list);
       this.router.get('/:id', musicController.getOne);
       this.router.post('/', musicController.create);
       this.router.delete('/:id', musicController.delete);
       this.router.put('/:id', musicController.update);
   }

}

const musicRoutes = new MusicRoutes();
export default musicRoutes.router;