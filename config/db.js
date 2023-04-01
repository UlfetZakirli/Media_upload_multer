const mongoose = require('mongoose')

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParams: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.DB, connectionParams)
        console.log('Connected to database!');
    } catch (err) {
        console.log(err);
        console.log('Cound not connect to database!');
    }
}