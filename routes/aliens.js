const express = require('express')
const route = express.Router();
const Alien = require('../models/alien');

route.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens);

    } catch (err) {
        res.send("Error" + err)
    }

})
route.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien);

    } catch (err) {
        res.send("Error" + err)
    }

})
route.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.send(a1)

    } catch (err) {
        res.send("Error" + err)
    }
})
route.delete('/:id', async (req, res) => {
    try {

        const alien = await Alien.findByIdAndRemove(req.params.id)
        res.send(alien)
    } catch (err) {
        res.send("Error" + err)
    }
})
route.post('/', async (req, res) => {
    const postAlien = new Alien({
        name: req.body.name,
        tech: req.body.tech

    })

    try {
        const response = await postAlien.save()
        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }
})
module.exports = route;
