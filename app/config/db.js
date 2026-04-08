

const mongoose = require('mongoose')


const DbCon = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || ' mongodb+srv://subhamanna559_db_user:PPoyY8zTYTGzfOyI@cluster0.h8n6rbe.mongodb.net/node-app')
        console.log('Database is connected');
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = DbCon