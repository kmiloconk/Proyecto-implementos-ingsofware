// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require("./config/configEnv.js");
// Importa el módulo 'cors' para agregar los cors
const cors = require("cors");
// Importa el módulo 'express' para crear la aplicacion web
const express = require("express");
// Importamos morgan para ver las peticiones que se hacen al servidor
const morgan = require("morgan");
// Importa el enrutador principal
const indexRoutes = require("./routes/index.routes.js");
// Importa el archivo 'configDB.js' para crear la conexión a la base de datos
const { setupDB } = require("./config/configDB.js");
// Importa el handler de errores
const { handleFatalError, handleError } = require("./utils/errorHandler.js");
const { createTipoModAsignacion, createAsignacion } = require("./config/initialSetup");
const { createRoles, verRoles, showUsers, createUsers, deleteAllUsers, eliminarRoles} = require("./config/initialSetup");
const { createTiposMantenimientos, createMantenimientos } = require("./config/initialSetup");
const { createtipos, createestados, createcategorias, createImplementos } = require("./config/initialSetup");


/**
 * @name setupServer
 * @description Inicia el servidor web
 * @returns {Promise<void>}
 * @throws {Error}
 */
async function setupServer() {
  try {
    // Obtiene las variables de entorno
    const { PORT, HOST } = configEnv();
    // Crea una instancia de la aplicacion
    const server = express();
    // Agrega el middleware para el manejo de datos en formato JSON
    server.use(express.json());
    // Agregamos los cors
    server.use(cors());
    // Agregamos morgan para ver las peticiones que se hacen al servidor
    server.use(morgan("dev"));
    // Agrega el middleware para el manejo de datos en formato URL
    server.use(express.urlencoded({ extended: false }));
    // Agrega el enrutador principal al servidor
    server.use("/api", indexRoutes);
    // Inicia el servidor web en el puerto 3000
    // La funcion de callback muestra un mensaje en la consola indicando que el servidor esta en ejecucion
    server.listen(PORT, () => {
      console.log(`=> Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  } catch (err) {
    handleError(err, "/server.js -> setupServer");
  }
}


async function setupAPI() {
  try {
    // Inicia la conexión a la base de datos
    await setupDB();
    // Inicia el servidor web
    await setupServer();
    // Inicia la creación de los roles
    //await eliminarRoles();
    await createRoles();
    await verRoles();
    //Inicia la creación del usuario admin y user
    //await deleteAllUsers();
    await createUsers();


    await createTipoModAsignacion();

    await createAsignacion();
    await showUsers();

    await createTiposMantenimientos();
    
    await createtipos();

    await createestados();

    await createcategorias();

    // Inicia la creación del usuario admin y user

    await createMantenimientos();
  } catch (err) {
    handleFatalError(err, "/server.js -> setupAPI");
  }
}

// Inicia la API
setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((err) => handleFatalError(err, "/server.js -> setupAPI"));
