//! Inicia la aplicación

const server = require('./src/app.js');
const {conn} = require('./src/db.js');


const PORT = 3001;
// Syncing all the models at once.

  server.listen(PORT, async () => {
    await conn.sync({force: true}); // Cambiar a False.
    console.log('listening at port  3001'); // eslint-disable-line no-console
  });


