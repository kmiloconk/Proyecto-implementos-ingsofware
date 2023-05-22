const { respondSuccess, respondError } = require("../utils/resHandler");
const userService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");

// Obtener todos los usuarios
async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  try {
    const userData = req.body;
    const user = await userService.createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener un usuario por su ID
async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar un usuario
async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await userService.updateUser(userId, userData);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar un usuario
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
