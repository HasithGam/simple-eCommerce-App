
const express = require('express')
const app = express()
const port = 3000;
const eCommerceRoutes = require('./routes/eCommerceRoutes')

// app.get('/', (req, res) => {
//     res.send('Welcome!')
// })

app.use("/myStore", eCommerceRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})




















// // index.js - updated version
// // import the app
// const app = require('./app');
// const port = 3000;
// const swaggerUi = require('swagger-ui-express');
// swaggerDocument = require('./swagger.json');
// app.use(
//     '/api-docs',
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerDocument)
// );
// // start the app to listen on the right port
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// })