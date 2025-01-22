const postsData = require ('./postsData');

// INDEX
const index = function (req, res) {
    res.json(`Lista dei post`); 
};
// SHOW
const show = function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }
    const post = postsData.find((elm) => elm.id == req.params.id)
    if (!post){
       res.sendStatus(404)
    }   
    res.json(`Dettagli di un post ${req.params.id}`);
}
// CREATE
const create = function (req, res) {
    res.json(`Creazione nuovo post`);
}
// UPDATE
const update = function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }
    const post = postsData.find((elm) => elm.id == req.params.id)
    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Modifica integrale del post ${req.params.id} `);
}
// MODIFY
const modify = function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }
    const post = postsData.find((elm) => elm.id == req.params.id)
    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Modifica parziale del post ${req.params.id} `);
}
// DESTROY
const destroy = function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }
    const post = postsData.find((elm) => elm.id == req.params.id)
    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Eliminazione del post ${req.params.id} `);
}
module.exports = {index, show, create, update, modify, destroy}