const server = require('./src/app.js');

server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    console.log("corriendo el servidor con expreess")
  });


