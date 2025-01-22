const express = require('express');
const router = express.Router();

// Importo funzioni controller
const controller = require("../controllers/postsControllers");

// index
router.get('/', controller.index);

// show
router.get('/:id', controller.show);

// Create
router.post('/', controller.create);

// Update
router.put('/:id', controller.update);

// modify
router.patch('/:id', controller.update);

// Delete
router.patch('/:id', controller.update);

// destroy
router.delete('/:id', controller.destroy);

module.exports = router;