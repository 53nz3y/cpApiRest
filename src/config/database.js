const mongoose = require('mongoose');

//========== connecting to mongodb database ============

const connectDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            
        });
        console.log('connecting to the Database')
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
};
module.exports = connectDatabase;