const Mantenimiento = require("../models/mantenimiento.model.js");
const TipoMantenimiento = require("../models/tipoMantenimiento.model.js");
const { handleError } = require("../utils/errorHandler");
const { mantenimientoBodySchema } = require("../schema/mantenimiento.schema");

async function getMantenimientos() {
  try {
    return await Mantenimiento.find();
  } catch (error) {
    handleError(error, "mantenimiento.service -> getMantenimientos");
  }
}

async function createMantenimiento(mantenimiento) {
  try {
    const { error } = mantenimientoBodySchema.validate(mantenimiento);
    if (error) return null;
    const { fechaMantenimiento, tiposMantenimientos, nombreResponsable,
      descripcion, estado, observacion } = mantenimiento;

    const tiposMantenimientosFound
    = await TipoMantenimiento.find({ nombre: { $in: tiposMantenimientos } });
    const myTipoMantenimiento = tiposMantenimientosFound.map((tipoMantenimiento) =>
    tipoMantenimiento._id);

    const newMantenimiento = new Mantenimiento({ fechaMantenimiento,
  tiposMantenimientos: myTipoMantenimiento, nombreResponsable, descripcion, estado, observacion });
    return await newMantenimiento.save();
  } catch (error) {
    handleError(error, "mantenimiento.service -> createMantenimiento");
  }
}

async function updateMantenimiento(id, mantenimiento) {
  try {
    const { error } = mantenimientoBodySchema.validate(mantenimiento);
    if (error) return null;

    return await Mantenimiento.findByIdAndUpdate(id, mantenimiento);
  } catch (error) {
    handleError(error, "mantenimiento.service -> updateMantenimiento");
  }
}


module.exports = {
  getMantenimientos,
  createMantenimiento,
  updateMantenimiento,
};
