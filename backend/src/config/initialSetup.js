// Importa el modelo de datos 'Role'
const Rol = require("../models/Rol.model.js");
const Tipo = require("../models/Tipo.model.js");
const Estado = require("../models/Estado.model.js");
const Categoria = require("../models/Categoria.model.js");
const Usuario = require("../models/Usuario.model.js");
const Implemento = require("../models/Implemento.model.js");

/**
 * @name createRoles
 * @description Crea los roles por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Rol.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Rol({ nombre: "brigadista" }).save(),
      new Rol({ nombre: "encargado" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @name createtipos
 * @description Crea los tipos por defecto en la base de datos
 * @returns {Promise<void>}
 */

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

/**
 * @name createEstados
 * @description Crea los estados por defecto en la base de datos
 * @returns {Promise<void>}
 */
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

/**
 * @name createCategorias
 * @description Crea las categorias por defecto en la base de datos
 * @returns {Promise<void>}
 */

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
    const count = await Usuario.estimatedDocumentCount();
    if (count > 0) return;

    const encargado = await Rol.findOne({ nombre: "encargado" });
    const brigadista = await Rol.findOne({ nombre: "brigadista" });

    await Promise.all([
      new Usuario({
        nombre: "brigadista",
        email: "brigadista@email.com",
        rol: brigadista._id,
      }).save(),
      new Usuario({
        nombre: "encargado",
        email: "encargado@email.com",
        rol: encargado._id,
      }).save(),
    ]);
    console.log("* => Users creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @name createImplementos
 * @description Crea los implementos por defecto en la base de datos
 * @returns {Promise<void>}
 */

async function createImplementos() {
  try {
    const count = await Implemento.estimatedDocumentCount();
    if (count > 0) return;

    const hacha = await Tipo.findOne({ nombre: "hacha" });
    const chaqueta = await Tipo.findOne({ nombre: "chaqueta" });
    const motosierra = await Tipo.findOne({ nombre: "motosierra" });

    const nuevo = await Estado.findOne({ nombre: "nuevo" });
    const usado = await Estado.findOne({ nombre: "usado" });

    const pesado = await Categoria.findOne({ nombre: "pesado" });
    const liviano = await Categoria.findOne({ nombre: "liviano" });
    const estandar = await Categoria.findOne({ nombre: "estandar" });

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
  createUsers,
};

