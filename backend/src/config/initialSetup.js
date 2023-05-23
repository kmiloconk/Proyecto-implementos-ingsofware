// Importa el modelo de datos 'Role'
const Rol = require("../models/Rol.model");
const Usuario = require("../models/Usuario.model");
const TipoModAsignacion = require("../models/tipoModAsignacion.model.js");
const Asignacion = require("../models/Asignacion.model.js");

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
      new Rol({ name: "Brigradista" }).save(),
      new Rol({ name: "Encargado" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
* @name createTipoModAsignacion
* @description Crea los Tipos de Modificaciones de la asignacion por defecto en la base de datos
* @returns {Promise<void>}
*/

async function createTipoModAsignacion() {
  try {
    // Busca todos los roles en la base de datos
    const count = await TipoModAsignacion.estimatedDocumentCount();
    // Si no hay tipos de mantenimiento en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new TipoModAsignacion({ nombre: "Asignacion" }).save(),
      new TipoModAsignacion({ nombre: "Modificacion" }).save(),
      new TipoModAsignacion({ nombre: "Eliminacion" }).save(),
    ]);
    console.log("* => Tipos de modificacion creados exitosamente");
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

    const encargado = await Rol.findOne({ name: "Encargado" });
    const brigadista = await Rol.findOne({ name: "Brigadista" });


    if (!brigadista || !encargado) {
      console.error("No se encontraron los roles 'Encargado' o 'Brigadista'");
      return;
    }

    await Promise.all([
      new Usuario({
        name: "Brigadista",
        email: "brigadista@email.com",
        roles: brigadista._id,
      }).save(),
      new Usuario({
        name: "Encargado",
        email: "encargado@email.com",
        roles: encargado._id,
      }).save(),
    ]);
    console.log("* => Usuario creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @name createAsignacion
 * @description Crea las Asignaciones por defecto en la base de datos
 * @returns {Promise<void>}
 */

async function createAsignacion() {
  try {
    const count = await Asignacion.estimatedDocumentCount();
    if (count > 0) return;

    const Asignacion = await TipoModAsignacion.findOne({ name: "Asignacion" });
    const Modificacion = await TipoModAsignacion.findOne({ name: "Modificacion" });
    const Eliminacion = await TipoModAsignacion.findOne({ name: "Eliminacion" });

    await Promise.all([
      new Asignacion({
        TipoModAsignacion: Asignacion._id,
      }).save(),
      new Asignacion({
        TipoModAsignacion: Modificacion._id,
      }).save(),
      new Asignacion({
        TipoModAsignacion: Eliminacion._id,
      }).save(),
    ]);
    console.log("* => Asignaciones creadas exitosamente");
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  createRoles,
  createUsers,
  createAsignacion,
  createTipoModAsignacion,
};
