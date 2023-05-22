const user = require("../models/user.model");
const Rol = require("../models/Rol.model");
const Implemento = require("../models/Implemento.model");
const Capacitacion = require("../models/Capacitacion.model");
const { handleError } = require("../utils/errorHandler");
const { userBodySchema } = require("../schema/user.schema");

users
user
async function getusers() {
    try {
        return await users.find();
    } catch (error) {
        handleError(error, "user.service -> getusers");
    }
}

async function createuser(user) {
    try {
        const { error } = userBodySchema.validate(user);
        if (error) return null;
        const { nombre, email, implemento, capacitacion, rol } = user;

        const userFound = await user.findOne({ email: user.email });
        if (userFound) return null;

        const implementoFound = await Implemento.find({ nombre: { $in: implemento } });
        const myImplemento = implementoFound.map((implemento) => implemento._id);

        const capacitacionFound = await Capacitacion.find({ nombre: { $in: capacitacion } });
        const myCapacitacion = capacitacionFound.map((capacitacion) => capacitacion._id);

        const rolFound = await Rol.find({ name: { $in: rol } });
        const myRol = rolFound.map((rol) => rol._id);

        const newuser = new user({ nombre, email, implemento: myImplemento, capacitacion: myCapacitacion, rol: myRol });
        return await newuser.save();
    } catch (error) {
    handleError(error, "user.service -> createuser");
    }
}


async function getuserById(id) {
    try {
        return await user.findById({ _id: id });
    } catch (error) {
        handleError(error, "user.service -> getuserById");
    }
}


async function updateuser(id, user) {
    try {
        const { error } = userBodySchema.validate(user);
        if (error) return null;

        return await user.findByIdAndUpdate(id, user);
    } catch (error) {
        handleError(error, "user.service -> updateuser");
    }
}

async function deleteuser(id) {
    try {
        return await user.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "user.service -> deleteuser");
    }
}

module.exports = {
    getusers,
    createuser,
    getuserById,
    updateuser,
    deleteuser,
};
