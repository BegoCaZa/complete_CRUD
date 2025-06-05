const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRouter = express.Router();

//rutas
//la ruta para obtener la informacion
usersRouter.get('/', usersController.readAllUsers);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.patch('/:id', usersController.updateUsersById);
usersRouter.delete('/:id', usersController.deleteUsersById);

module.exports = usersRouter;
