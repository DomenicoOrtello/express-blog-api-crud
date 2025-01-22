const express = require('express');
const router = express.Router();
const postsDataElm = require("../postsData")

// index
router.get('/', function (req, res) {
    res.json('Lista dei post');
});
// show
router.get('/:id', function (req, res) {
    res.json(`Dettagli del post: ${req.params.id}`);
});
// store
router.post('/', function (req, res) {
    res.json('Creazione nuovo post');
});
// update
router.put('/:id', function (req, res) {
    res.json(`Modifica integrale del post: ${req.params.id}`);
});
// modify
router.patch('/:id', function (req, res) {
    res.json(`Modifica parziale del post: ${req.params.id}`);
});
// destroy
router.delete('/:id', function (req, res) {
    res.json(`Eliminazione del post: ${req.params.id}`);
});

module.exports = router;