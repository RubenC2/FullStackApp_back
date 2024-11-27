const artController = require("../controllers/art.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', artController.getAllArticulos);
router.post('/', artController.createArticulo);
router.put('/', artController.updateArticulo); 
router.delete('/', artController.deleteArticulo); 


module.exports = router;