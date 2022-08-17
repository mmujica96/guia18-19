var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Producto = require('../models').producto;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/productos', function(req, res, next) {
    Producto.findAll()
    .then(productos => {
        res.json(productos)
    }).catch((err) => {
        res.status(400).send(error)
    });
  });

  router.get('/productos/:id', function(req, res, next) {
    Producto.findOne( { where :{ id: req.params.id}})
    .then(productos => {
        res.json(productos)
    }).catch((err) => {
        res.status(400).send(error)
    });
  });

  router.delete('/borrar/:id', function(req,res) {
    const producto = req.params.id;;
    Producto.destroy({ where : { id: producto}})
    .then(data => {
      res.send({"Estado": `borrado ${producto}`})})
  })

module.exports = router;
