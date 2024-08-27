import { Router } from 'express';
import { addDog, addDogPage, allDogs, deleteDog, editDog, editDogPage, oneDog } from '../controllers/dogController';

const router = Router();

// GET /coffee - renders a list of coffee items
router.get('/', allDogs);

// GET /coffee/add - render the add coffee item page
router.get('/add', addDogPage);

// POST /coffee/add - add coffee item to array
router.post('/add', addDog);

// GET /coffee/edit/:coffeeId - render the edit coffee page
router.get('/edit/:dogId', editDogPage);

// POST /coffee/edit/:coffeeId - render the edit coffee page
router.post('/edit/:dogId', editDog);

// POST /coffee/delete/:coffeeId - delete coffee item
router.post('/delete/:dogId', deleteDog);

// GET /coffee/:coffeeId - render the coffee item requested
router.get('/:dogId', oneDog);






export default router;