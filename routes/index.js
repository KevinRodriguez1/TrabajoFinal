var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controllers');
const controllers2 = require('../controllers/controllersOficina');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/personas", controllers.listPersonas);
router.get('/agregar', controllers.getAgregar);
router.post("/agregar", controllers.postagregarDato); // método para agregar datos.
router.get('/edit/:id', controllers.getdatoItem);  // metodo get para solicitar datos.
router.post('/update/:id', controllers.postnuevoDato); // metodo para actualizar dato por medio de id.
router.get('/delete/:id', controllers.getborrarDato); // solicito por medio de "get" borrar con un identificador de objeto "id"
router.post('/delete/:id', controllers.postDeletePersona); // borro el dato
router.get('/buscar', controllers.buscarPersona); 
router.post('/resultados', controllers.buscarPersonaResultados);

router.get("/oficinas", controllers2.listOficina); // muestra la pag del servidor donde estan las oficinas.
router.get('/agregarOf', controllers2.getAgregarOf);  //  ruta para agregar una oficina.
router.post("/agregarOf", controllers2.postAgregarOficina); // método para agregar datos.
router.get('/modificarOf/:id', controllers2.getModificarOficina);  // metodo get para solicitar datos.
router.post('/updateOf/:id', controllers2.postModificarOficina); // metodo para actualizar modificacion.
router.get('/deleteOf/:id', controllers2.getElimOf); // solicito borrar un dato por medio de id.
router.post('/deleteOf/:id', controllers2.postElimOf);
router.get('/buscarOf', controllers2.getBuscarOficina); 
router.post('/resultadosOf', controllers2.postBuscarOfResultados);

module.exports = router;