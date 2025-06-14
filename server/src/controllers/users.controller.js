const fs = require('fs/promises');
const path = require('path');
const { json } = require('stream/consumers');
// const { v4 } = require('uuid');

const usersController = {};

const usersFilePath = path.resolve(__dirname, '../../data/users.json');

//READ creo un método readAllUsers y meto la promesa
usersController.readAllUsers = async (req, res) => {
  try {
    const data = await fs.readFile(usersFilePath);
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    res.status(500).send('Error al leer el archivo');
  }
};

//get user by id
usersController.getUserById = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  try {
    const data = await fs.readFile(usersFilePath);
    const jsonData = JSON.parse(data);

    // encuentra el id
    const foundUser = jsonData.find(user => user.userId === userId);
    if (!foundUser) return res.status(404).send('Usuario no encontrado');
    res.send(foundUser);
  } catch (err) {
    console.log('Error al leer el archivo:', err);
    res.status(500).send('Error al leer el archivo');
  }
};

//UPDATE
usersController.updateUsersById = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  try {
    const data = await fs.readFile(usersFilePath);
    const jsonData = JSON.parse(data);

    // encuentra el id
    const foundUser = jsonData.find(user => user.userId === userId);
    if (!foundUser) return res.status(404).send('Usuario no encontrado');

    //verifica el email
    const existingEmail = jsonData.find(
      user => user.email === updatedUser.email && user.userId !== userId
    );
    if (existingEmail) return res.status(409).send('El email ya está en uso');

    const updatedJsonData = jsonData.map(user => {
      if (user.userId === userId) {
        return {
          ...user,
          ...updatedUser
        };
      }
      return user;
    });

    //escribir con promesas
    await fs.writeFile(usersFilePath, JSON.stringify(updatedJsonData));

    const updatedUserComplete = updatedJsonData.find(
      user => user.userId === userId
    );
    res.send(updatedUserComplete);
    console.log('Usuario actualizado:', updatedUserComplete);
  } catch (err) {
    // junto los errores

    res.status(500).send('Error al procesar la solicitud');
  }
};

//DELETE
usersController.deleteUsersById = async (req, res) => {
  const userId = req.params.id;

  try {
    const data = await fs.readFile(usersFilePath);
    const jsonData = JSON.parse(data);

    // encuentra el id
    const foundUser = jsonData.find(user => user.userId === userId);
    if (!foundUser) return res.status(404).send('Usuario no encontrado');
    // filtra el usuario
    const updatedJsonData = jsonData.filter(user => user.userId !== userId);

    //escribir con promesas
    await fs.writeFile(usersFilePath, JSON.stringify(updatedJsonData));
    res.send({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    // junto los errores
    res.status(500).send('Error al procesar la solicitud');
  }
};

module.exports = usersController;
