const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db_url = 'mongodb://localhost:27017/mongodblesson';

mongoose.connect(db_url, { useNewUrlParser: true });

mongoose.connection.once('open', ()=> console.log(`connected to mongo at ${db_url}`));


module.exports = mongoose;
