const app = require('./app');
const mongoose = require('mongoose');
const { MONGODB, PORT } = require('./utils/config');


// connect to the database
mongoose.connect(MONGODB)
    .then(() => {
        console.log("Connecter to the database..");
   
    // listen for server
     app.listen(PORT, () => {
    console.log(`Server is running @http://localhost:3001`);
});

 })
  .catch((error) => {
    console.log("Error connecting to the database..", error);
  })