const app = require('./app.js');
const dotenv = require('dotenv');
const path = require('path')
const connectDatabase = require('./config/database.js')

dotenv.config({path:path.join(__dirname, "config/config.env")}); //this is what absolute path is...

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`);
    
})