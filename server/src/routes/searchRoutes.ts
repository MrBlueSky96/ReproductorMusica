import { Router } from 'express';

import searchController from '../controllers/searchController';

class SearchRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', searchController.list);
        this.router.get('/:searchText', searchController.searchSongsAndPlaylists);
    }

}

const searchRoutes = new SearchRoutes();
export default searchRoutes.router;