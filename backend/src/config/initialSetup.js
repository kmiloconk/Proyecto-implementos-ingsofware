const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const Capacitacion = require('../models/Capacitacion.model');
const Rol = require("../models/Rol.model.js");
const Tipo = require("../models/tipo.model.js");
const Estado = require("../models/Estado.model.js");
const Categoria = require("../models/Categoria.model.js");
const Usuario = require("../models/Usuario.model.js");
const Implemento = require("../models/Implemento.model.js");

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
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Rol({ name: "brigadista" }).save(),
      new Rol({ name: "encargado" }).save(),
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




async function createTipos() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Tipo.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Tipo({ nombre: "hacha" }).save(),
      new Tipo({ nombre: "chaqueta" }).save(),
      new Tipo({ nombre: "pantalon" }).save(),
      new Tipo({ nombre: "capucha" }).save(),
      new Tipo({ nombre: "protector" }).save(),
    ]);
    console.log("* => tipos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}


async function createEstados() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Estado.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Estado({ nombre: "nuevo" }).save(),
      new Estado({ nombre: "usado" }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}


async function createCategorias() {
  try {
    const count = await Categoria.estimatedDocumentCount();

    if (count > 0) return;

    await Promise.all([
      new Categoria({ nombre: "pesado" }).save(),
      new Categoria({ nombre: "liviano" }).save(),
      new Categoria({ nombre: "estandar" }).save(),
    ]);
    console.log("* => Categorias creadas exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @name createUsers
 * @description Crea los usuarios por defecto en la base de datos
 * @returns {Promise<void>}
 */

async function createUsers() {
  try {
    const count = await User.estimatedDocumentCount();
    if (count > 0) return;

    const encargado = await Role.findOne({ name: "encargado" });
    const brigadista = await Role.findOne({ name: "brigadista" });

    await Promise.all([
      new Usuario({
        name: "brigadista",
        email: "brigadista@email.com",
        roles: brigadista._id,
      }).save(),
      new Usuario({
        name: "encargado",
        email: "encargado@email.com",
        roles: encargado._id,
      }).save(),
    ]);
    console.log("* => Users creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}


async function createImplementos() {
  try {
    const count = await Implemento.estimatedDocumentCount();
    if (count > 0) return;

    const hacha = await Tipo.findOne({ nombre: "hacha" });
    const chaqueta = await Tipo.findOne({ nombre: "chaqueta" });
    const motosierra = await Tipo.findOne({ nombre: "motosierra" });

    const nuevo = await Estado.findOne({ nombre: "nuevo" });
    const usado = await Estado.findOne({ nombre: "usado" });

    const pesado = await Categoria.findOne({ name: "pesado" });
    const liviano = await Categoria.findOne({ name: "liviano" });
    const estandar = await Categoria.findOne({ name: "estandar" });

    await Promise.all([
      new Implemento({
        tipo: hacha._id,
        estado: usado._id,
        categoria: estandar._id,
        fechaVencimiento: "2024-01-22",
        solicitadoPorBrigadista: "false",
      }).save(),
      new Implemento({
        tipo: chaqueta._id,
        estado: usado._id,
        categoria: liviano._id,
        fechaVencimiento: "2023-11-10",
        solicitadoPorBrigadista: "false",
      }).save(),
      new Implemento({
        tipo: motosierra._id,
        estado: nuevo._id,
        categoria: pesado._id,
        fechaVencimiento: null,
        solicitadoPorBrigadista: "false",
      }).save(),
    ]);
    console.log("* => Implementos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}








module.exports = {
  createRoles,
  createTipos,
  createEstados,
  createCategorias,
  createImplementos,
  createTiposMantenimientos,
  createImplementos,
  createUsers,
  verRoles,
  eliminarRoles,
  showUsers,
  deleteAllUsers,
  displayTiposMantenimientos,
  createCapacitaciones
};

