const express = require('express');
const catRoutes = require('./routes/cats');
const db = require('./db');
const app = express();

const logger = (req, res, next) => {
  console.log("host:", req.host);
  console.log("method:", req.method);
  console.log("path:", req.path);
  next();
};

app.use(express.json()); //handling the response parsing the request to json, in another words convert to json

// specific kind of middleware/error handling
app.use("/cats", catRoutes); // seting the url and routes(subpages) to get the cat information
app.use(logger); // always run

//error handling middleware has four parameters
//java does not have overloaded functions
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

const server = app.listen(4494, () => {
  console.log(`Server started succesfully on port number ${server.address().port}`)
})
