const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-6bdfc.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true', 
    { useNewUrlParser: true , useUnifiedTopology: true },
    ()=>console.log('Connected to mongoDb'),
)

mongoose.set('useCreateIndex', true);

module.exports = mongoose;