import { Router } from 'express';

class MusicRoutes {

   public router: Router = Router();

   constructor() {
       this.config();
   }

   config(): void {
       this.router.get('/', (rep, res) => res.send('Music'));
   }

}

const musicRoutes = new MusicRoutes();
export default musicRoutes.router;