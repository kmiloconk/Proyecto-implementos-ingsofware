// Importa el modelo de datos 'Role'
const Role = require("../models/role.model.js");
const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const tipo = require("../models/tipo.model.js");
const estado = require("../models/estado.model.js");
const categoria = require("../models/categoria.model.js");
const Mantenimiento = require("../models/mantenimiento.model.js");
const User = require("../models/user.model.js");
const Implemento = require("../models/Implemento.model.js");

/**
 * @name createRoles
 * @description Crea los roles por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
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
    // Busca todos los roles en la base de datos
    const count = await TipoMantenimiento.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
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


/**
 * @name createUsers
 * @description Crea los usuarios por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createUsers() {
  try {
    const count = await User.estimatedDocumentCount();
    if (count > 0) return;

    const admin = await Role.findOne({ name: "admin" });
    const user = await Role.findOne({ name: "user" });

    await Promise.all([
      new User({
        name: "user",
        email: "user@email.com",
        roles: user._id,
      }).save(),
      new User({
        name: "admin",
        email: "admin@email.com",
        roles: admin._id,
      }).save(),
    ]);
    console.log("* => Users creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @name createMantenimientos
 * @description Crea los mantenimientos por defecto en la base de datos
 * @returns {Promise<void>}
 */
async function createMantenimientos() {
  try {
    const count = await Mantenimiento.estimatedDocumentCount();
    if (count > 0) return;

    const correctivo = await TipoMantenimiento.findOne({ name: "correctivo" });
    const preventivo = await TipoMantenimiento.findOne({ name: "preventivo" });
    const predictivo = await TipoMantenimiento.findOne({ name: "predictivo" });

    await Promise.all([
      new Mantenimiento({
        tiposMantenimientos: correctivo._id,
      }).save(),
      new Mantenimiento({
        tiposMantenimientos: preventivo._id,
      }).save(),
      new Mantenimiento({
        tiposMantenimientos: predictivo._id,
      }).save(),
    ]);
    console.log("* => Mantenimientos creados exitosamente");
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
  createTiposMantenimientos,
  createtipos,
  createestados,
  createcategorias,
  createMantenimientos,
  createImplementos,
  createUsers,
};
