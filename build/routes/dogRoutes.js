"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dogController_1 = require("../controllers/dogController");
const router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/', dogController_1.allDogs);
// GET /coffee/add - render the add coffee item page
router.get('/add', dogController_1.addDogPage);
// POST /coffee/add - add coffee item to array
router.post('/add', dogController_1.addDog);
// GET /coffee/edit/:coffeeId - render the edit coffee page
router.get('/edit/:dogId', dogController_1.editDogPage);
// POST /coffee/edit/:coffeeId - render the edit coffee page
router.post('/edit/:dogId', dogController_1.editDog);
// POST /coffee/delete/:coffeeId - delete coffee item
router.post('/delete/:dogId', dogController_1.deleteDog);
// GET /coffee/:coffeeId - render the coffee item requested
router.get('/:dogId', dogController_1.oneDog);
exports.default = router;
