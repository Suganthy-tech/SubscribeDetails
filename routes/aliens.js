const express = require('express')
const route = express.Router();
route.get('/', () => {
    console.log("get achieved!");
})
module.exports = route;