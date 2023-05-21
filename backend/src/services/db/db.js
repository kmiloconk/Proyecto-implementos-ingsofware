const mongoose = require('mongoose');
const { configEnv } = require('../../config/env/config');
const env = configEnv();

const setUpServer = (server) => {
  try {
    mongoose
            .connect(env.URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            })
            .then(() =>
                    server.listen(env.PORT, () =>
                            console.log(`Server Running on Port: http://localhost:${env.PORT}`)
                    )
            )
            .catch((error) => console.log(`${error} did not connect`));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { setUpServer };