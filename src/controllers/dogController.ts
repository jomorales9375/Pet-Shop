import { RequestHandler } from "express";
import { Dog } from "../models/Dog";


export const defaultDog: RequestHandler = (req, res, next) => {
    res.redirect('/dog');
}


export const allDogs: RequestHandler = async (req, res, next) => {
    let dogList: Dog[] = await Dog.findAll();
    res.render('all-dogs', { dogList });
}

export const oneDog: RequestHandler = async (req, res, next) => {
    let itemId = req.params.dogId;
    let dogItem: Dog | null = await Dog.findByPk(itemId);

    if (dogItem) {
        res.render('dog-detail', { foundDog: dogItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
}


export const addDogPage: RequestHandler = (req, res, next) => {
    res.render('add-dog');
}

export const addDog: RequestHandler = async (req, res, next) => {
    let newDog: Dog = req.body;
    await Dog.create(newDog);
    res.redirect('/dog');
}

export const editDogPage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.dogId;
    let dogItem: Dog | null = await Dog.findOne({
        where: { dogId: itemId }
    });

    if (dogItem) {
        res.render('edit-dog', { foundDog: dogItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
}


export const editDog: RequestHandler = async (req, res, next) => {
    let itemId = req.params.dogId;
    let updatedItem: Dog = req.body;

    let [updated] = await Dog.update(updatedItem, {
        where: { dogId: itemId }
    });

    if (updated === 1) {
        res.redirect('/dog');
    }
    else {
        res.render('error', { message: 'Dog info could not be updated' });
    }
}


export const deleteDog: RequestHandler = async (req, res, next) => {
    let itemId = req.params.dogId;

    let deleted = await Dog.destroy({
        where: { dogId: itemId }
    });

    if (deleted) {
        res.redirect('/dog')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find dog' });
    }
}





