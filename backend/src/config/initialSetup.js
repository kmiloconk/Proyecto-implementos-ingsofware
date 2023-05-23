// Importa el modelo de datos 'Role'
const Role = require("../models/role.model.js");
const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const Mantenimiento = require("../models/mantenimiento.model.js");
const User = require("../models/user.model.js");

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


module.exports = {
  createRoles,
  createTiposMantenimientos,
  createMantenimientos,
  createUsers,
};
