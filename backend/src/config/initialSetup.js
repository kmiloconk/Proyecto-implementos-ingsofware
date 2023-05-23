const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const Capacitacion = require('../models/Capacitacion.model');
const Mantenimiento = require("../models/mantenimiento.model.js");
const Rol = require("../models/Rol.model.js");
const Tipo = require("../models/Tipo.model.js");
const Estado = require("../models/Estado.model.js");
const Categoria = require("../models/Categoria.model.js");
const Usuario = require("../models/Usuario.model.js");
const Implemento = require("../models/Implemento.model.js");




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

/**
 * @name createtipos
 * @description Crea los tipos por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createtipos() {
  try {
    // Busca todos los roles en la base de datos
    const count = await tipo.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new tipo({ nombre: "malo" }).save(),
      new tipo({ nombre: "regular" }).save(),
      new tipo({ nombre: "excelente" }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @name createestados
 * @description Crea los estados por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createestados() {
  try {
    // Busca todos los roles en la base de datos
    const count = await estado.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new estado({ nombre: "nuevo" }).save(),
      new estado({ nombre: "usado" }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}


/**
 * @name createcategorias
 * @description Crea los categorias por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createcategorias() {
  try {
    // Busca todos los roles en la base de datos
    const count = await categoria.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new categoria({ nombre: "pesado" }).save(),
      new categoria({ nombre: "liviano" }).save(),
      new categoria({ nombre: "estandar" }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}


/**
 * @name createTiposMantenimientos
 * @description Crea los Tiposmantenimientos por defecto en la base de datos
 * @returns {Promise<void>}
 */
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
      new Tipo({ nombre: "protector de cuello" }).save(),
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





async function createImplementos() {
  try {
    const count = await Implemento.estimatedDocumentCount();
    if (count > 0) return;

    const hacha = await Tipo.findOne({ name: "hacha" });
    const chaqueta = await Tipo.findOne({ name: "chaqueta" });
    const motosierra = await Tipo.findOne({ name: "motosierra" });

    const nuevo = await Estado.findOne({ name: "nuevo" });
    const usado = await Estado.findOne({ name: "usado" });

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

async function createImplementos() {
  try {
    const count = await Implemento.estimatedDocumentCount();
    if (count > 0) return;

    const malo = await Tipo.findOne({ name: "malo" });
    const regular = await Tipo.findOne({ name: "regular" });
    const excelente = await Tipo.findOne({ name: "excelente" });

    const nuevo = await estado.findOne({ name: "nuevo" });
    const usado = await estado.findOne({ name: "usado" });

    const pesado = await categoria.findOne({ name: "pesado" });
    const liviano = await categoria.findOne({ name: "liviano" });
    const estandar = await categoria.findOne({ name: "estandar" });

    await Promise.all([
      new Implemento({
        tipos: malo._id,
        estados: nuevo._id,
        categorias: pesado._id,
      }).save(),
      new Implemento({
        tipos: regular._id,
        estados: usado._id,
        categorias: liviano._id,
      }).save(),
      new Implemento({
        tipos: excelente._id,
        estados: nuevo._id,
        categorias: estandar._id,
      }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
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
  createtipos,
  createestados,
  createcategorias,
  createMantenimientos,
  createImplementos,
  createUsers,
  verRoles,
  eliminarRoles,
  showUsers,
  deleteAllUsers,
  displayTiposMantenimientos
};

