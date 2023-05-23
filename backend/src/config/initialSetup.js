const Rol = require("../models/Rol.model");
const Usuario = require("../models/Usuario.model");
const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const Capacitacion = require('../models/Capacitacion.model');
const Tipo = require('../models/tipo.model');
const Estado = require('../models/Estado.model');





async function eliminarRoles() {
  try {
    await Rol.deleteMany({});
    console.log("Roles eliminados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

async function createRoles() {
  try {
    const count = await Rol.estimatedDocumentCount();
    if (count > 0) return;

    await Promise.all([
      new Rol({ nombre: "Brigadista" }).save(),
      new Rol({ nombre: "Encargado" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

async function verRoles() {
  try {
    const roles = await Rol.find();
    console.log(roles);
  } catch (error) {
    console.error(error);
  }
}
async function deleteAllUsers() {
  try {
    await Usuario.deleteMany();
    console.log("Todos los usuarios han sido eliminados exitosamente.");
  } catch (error) {
    console.error(error);
  }
}

async function createTiposMantenimientos() {
  try {
    const count = await TipoMantenimiento.estimatedDocumentCount();
    if (count > 0) return;
    await Promise.all([
      new TipoMantenimiento({ nombre: "correctivo" }).save(),
      new TipoMantenimiento({ nombre: "preventivo" }).save(),
      new TipoMantenimiento({ nombre: "predictivo" }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

async function displayTiposMantenimientos() {
  try {
    const tiposMantenimientos = await TipoMantenimiento.find();
    if (tiposMantenimientos.length === 0) {
      console.log("No se encontraron tipos de mantenimiento.");
      return;
    }

    console.log("Tipos de Mantenimiento:");
    tiposMantenimientos.forEach((tipoMantenimiento) => {
      console.log(`- ID: ${tipoMantenimiento._id} - Nombre: ${tipoMantenimiento.nombre}`);
    });
  } catch (error) {
    console.error(error);
  }
}

async function createUsers() {
  try {
    const count = await Usuario.estimatedDocumentCount();
    if (count > 0) return;

    const encargado = await Rol.findOne({ nombre: "Encargado" });
    const brigadista = await Rol.findOne({ nombre: "Brigadista" });
    console.log("ID del rol Encargado:", encargado._id);
    console.log("ID del rol Brigadista:", brigadista._id);

    await Promise.all([
      new Usuario({
        nombre: "Brigadista",
        email: "Brigadista@email.com",
        rol: brigadista._id,
      }).save(),
      new Usuario({
        nombre: "Encargado",
        email: "Encargado@email.com",
        rol: encargado._id,
      }).save(),
    ]);
    console.log("* => Usuario creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}
async function showUsers() {
  try {
    const usuarios = await Usuario.find().populate("rol");
    usuarios.forEach(usuario => {
      console.log(`Usuario: ${usuario.nombre}`);
      console.log("Rol asignado:");
      usuario.rol.forEach(rol => {
        console.log(`- ${rol.nombre}`);
      });
      console.log();
    });
  } catch (error) {
    console.error(error);
  }
}

async function createCapacitaciones() {
  try {
    const count = await Capacitacion.estimatedDocumentCount();
    if (count > 0) return;

    await Promise.all([
      new Capacitacion({ nombre: "Manejo de extintores" }).save(),
      new Capacitacion({ nombre: "Primeros auxilios" }).save(),
      new Capacitacion({ nombre: "Evaluación de riesgos" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
}

async function createTipos() {
  try {
    const count = await Tipo.estimatedDocumentCount();
    if (count > 0) return;

    await Promise.all([
      new Tipo({ nombre: "Casco" }).save(),
      new Tipo({ nombre: "Chaleco ignífugo" }).save(),
      new Tipo({ nombre: "Mascarilla antigás" }).save(),
      new Tipo({ nombre: "Botas de seguridad" }).save(),
      new Tipo({ nombre: "Linterna resistente al agua" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
}

async function createEstados() {
  try {
    const count = await Estado.estimatedDocumentCount();
    if (count > 0) return;

    await Promise.all([
      new Estado({ nombre: "Perfecto" }).save(),
      new Estado({ nombre: "Usado" }).save(),
      new Estado({ nombre: "En Mantención" }).save(),
      new Estado({ nombre: "Roto" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
}





module.exports = {
  createCapacitaciones,
  createEstados,
  createTipos,
  createRoles,
  createTiposMantenimientos,
  createUsers,
  verRoles,
  eliminarRoles,
  showUsers,
  deleteAllUsers,
  displayTiposMantenimientos
};
