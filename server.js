// ======= import ==============
require('dotenv').config();
const app = require('./src/app');
const connectDatabase = require('./src/config/database');

const port = 3000;

//========== connect database ========

connectDatabase();



//============== routing ================
app.listen(port, () =>{
    console.log(`connexion to the server :) on port ${port}`);
});