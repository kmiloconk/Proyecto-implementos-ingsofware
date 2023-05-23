const Rol = require("../models/Rol.model");
const Usuario = require("../models/Usuario.model");
const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const Mantenimiento = require("../models/mantenimiento.model.js");



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

async function solicitarEquipamiento(brigadistaId, implementoId) {
  try {
    // Verificar si el brigadista existe
    const brigadista = await Usuario.findById(brigadistaId);
    if (!brigadista) {
      console.log("Brigadista no encontrado");
      return;
    }

    // Verificar si el usuario es un brigadista
    const brigadistaRole = await Rol.findOne({ nombre: "Brigadista" });
    if (!brigadista.rol.equals(brigadistaRole._id)) {
      console.log("El usuario no es un brigadista");
      return;
    }
    const implemento = await Usuario.findById(implementoId);
    // Crear la notificación y guardarla en la base de datos
    const notificacion = new Notificacion({
      brigadista: brigadista._id,
      implemento: implemento._id,
      estado: "Pendiente",
    });
    await notificacion.save();

    console.log("Notificación creada exitosamente");
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
  verRoles,
  eliminarRoles,
  showUsers,
  solicitarEquipamiento,
  deleteAllUsers
};
