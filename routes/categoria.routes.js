const categoriaController = require("../controllers/categoria.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', categoriaController.getAllCategorias);
router.get('/nombre/:nombre', categoriaController.getCategoriaByName)


module.exports = router;