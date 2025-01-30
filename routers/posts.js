const express = require('express');
const router = express.Router();

// Importo funzioni controller
const controller = require("../controllers/postsControllers");

// IMPORTANZIONE FUNZIONI CONTROLLER
const controller = require("../controllers/postsController")

// ISTRUISCO I MIDDLEWARE
router.use('/:id', middleware.middlewareErrorString)

// ISTRUISCO LA LETTURA DEL BODY_PARSER
router.use(express.json());

// index
router.get('/', controller.index);

// show
router.get('/:id', controller.show);

// Store
router.post('/', controller.store);

// Update
router.put('/:id', controller.update);

// modify
router.patch('/:id', controller.modify);

// destroy
router.delete('/:id', controller.destroy);