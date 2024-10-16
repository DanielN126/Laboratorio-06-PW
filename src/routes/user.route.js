const {addUserController, showForm, getAllUsersController} = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', getAllUsersController); // Nueva ruta para mostrar todos los usuarios

module.exports = router;
