const artController = require("../controllers/art.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', artController.getAllArticulos);
router.get('/:id', artController.getArticulosBycat_id);
router.get('/titulo/:titulo', artController.getArticuloByTitle);
router.post('/', artController.createArticulo);
router.put('/', artController.updateArticulo); 
router.delete('/', artController.deleteArticulo); 


module.exports = router;