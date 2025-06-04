const fs = require('fs/promises');
const path = require('path');
const { json } = require('stream/consumers');
// const { v4 } = require('uuid');

const usersController = {};

const usersFilePath = path.resolve(__dirname, '../../data/users.json');

//READ creo un método readAllUsers y meto la promesa
usersController.readAllUsers = (req, res) => {
  fs.readFile(usersFilePath, (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');

    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
};

//UPDATE
usersController.updateUsersById = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  fs.readFile(usersFilePath, (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');

    const jsonData = JSON.parse(data);

    const foundUser = jsonData.find(user => user.userId === userId); //lo encuentra por su id
    if (!foundUser) return res.status(404).send('Usuario no encontrado');

    //mo repetir email
    const existingEmail = jsonData.find(
      user => user.email === updatedUser.email && user.userId !== userId
    );
    if (existingEmail) return res.status(409).send('El email ya está en uso');

    //creo un nuevo objeto con los datos actualizados
    const updatedJsonData = jsonData.map(user => {
      if (user.userId === userId) {
        return {
          ...user,
          ...updatedUser //actualizo los datos del usuario
        };
      }
      return user; //si no coicide,devuelvo el usuario sin cambios
    });
    fs.writeFile(usersFilePath, JSON.stringify(updatedJsonData), err => {
      if (err) return res.status(500).send('Error al escribir en el archivo');

      res.send(updatedUser);
      console.log('Usuario actualizado:', updatedUser);
      //mando solo ese usuario actualizado
    });
  });
};

module.exports = usersController;
