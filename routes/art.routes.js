const artController = require("../controllers/art.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', artController.getAllArticulos);
// router.post('/', artController.createUser);
// router.put('/', artController.updateUser); 
// router.delete('/', artController.deleteUser); 


module.exports = router;