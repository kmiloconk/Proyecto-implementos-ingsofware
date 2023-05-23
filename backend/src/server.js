const { configEnv } = require("./config/configEnv.js");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const indexRoutes = require("./routes/index.routes.js");

const { setupDB } = require("./config/configDB.js");


const { handleFatalError, handleError } = require("./utils/errorHandler.js");
const { createRoles, verRoles, showUsers, createUsers, deleteAllUsers, eliminarRoles, createCapacitaciones, createTipos, createEstados, displayTiposMantenimientos} = require("./config/initialSetup");
const { createTiposMantenimientos } = require("./config/initialSetup");

async function setupServer() {
  try {

    const { PORT, HOST } = configEnv();
    const server = express();
    server.use(express.json());
    server.use(cors());
    server.use(morgan("dev"));
    server.use(express.urlencoded({ extended: false }));
    server.use("/api", indexRoutes);
    server.listen(PORT, () => {
      console.log(`=> Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  } catch (err) {
    handleError(err, "/server.js -> setupServer");
  }
}


async function setupAPI() {
  try {
    await setupDB();
    await setupServer();
    //await eliminarRoles();
    await createRoles();
    await verRoles();
    //await deleteAllUsers();
    await createUsers();
    await showUsers();
    await createCapacitaciones();
    await createTipos();
    await createEstados()
    await displayTiposMantenimientos();
    await createTiposMantenimientos();

  } catch (err) {
    handleFatalError(err, "/server.js -> setupAPI");
  }
}

// Inicia la API
setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((err) => handleFatalError(err, "/server.js -> setupAPI"));
