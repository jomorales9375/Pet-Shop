"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDog = exports.editDog = exports.editDogPage = exports.addDog = exports.addDogPage = exports.oneDog = exports.allDogs = exports.defaultDog = void 0;
const Dog_1 = require("../models/Dog");
const defaultDog = (req, res, next) => {
    res.redirect('/dog');
};
exports.defaultDog = defaultDog;
const allDogs = async (req, res, next) => {
    let dogList = await Dog_1.Dog.findAll();
    res.render('all-dogs', { dogList });
};
exports.allDogs = allDogs;
const oneDog = async (req, res, next) => {
    let itemId = req.params.dogId;
    let dogItem = await Dog_1.Dog.findByPk(itemId);
    if (dogItem) {
        res.render('dog-detail', { foundDog: dogItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
};
exports.oneDog = oneDog;
const addDogPage = (req, res, next) => {
    res.render('add-dog');
};
exports.addDogPage = addDogPage;
const addDog = async (req, res, next) => {
    let newDog = req.body;
    await Dog_1.Dog.create(newDog);
    res.redirect('/dog');
};
exports.addDog = addDog;
const editDogPage = async (req, res, next) => {
    let itemId = req.params.dogId;
    let dogItem = await Dog_1.Dog.findOne({
        where: { dogId: itemId }
    });
    if (dogItem) {
        res.render('edit-dog', { foundDog: dogItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
};
exports.editDogPage = editDogPage;
const editDog = async (req, res, next) => {
    let itemId = req.params.dogId;
    let updatedItem = req.body;
    let [updated] = await Dog_1.Dog.update(updatedItem, {
        where: { dogId: itemId }
    });
    if (updated === 1) {
        res.redirect('/dog');
    }
    else {
        res.render('error', { message: 'Dog info could not be updated' });
    }
};
exports.editDog = editDog;
const deleteDog = async (req, res, next) => {
    let itemId = req.params.dogId;
    let deleted = await Dog_1.Dog.destroy({
        where: { dogId: itemId }
    });
    if (deleted) {
        res.redirect('/dog');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find dog' });
    }
};
exports.deleteDog = deleteDog;
