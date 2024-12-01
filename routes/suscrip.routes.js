const suscripController = require("../controllers/suscrip.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', suscripController.getAllSuscripts);
router.post('/', suscripController.createSuscrip);
// router.put('/', suscripController.updateSuscrip); 
// router.delete('/', artController.deleteArticulo); 


module.exports = router;