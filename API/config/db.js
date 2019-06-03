class ConfigterDB{
    constructor(_db=null){
        if(_db==null){
            this._db = "mongodb://localhost:27017/mongoapi"
        }else{
            this.db(_db)
        }
    }
    get db(){
        return this._db
    }
    set db(_db){
        this._db = _db
    }
    dbc(){
        const mongoose = require('mongoose')
        mongoose.connect(this.db,{
            useMongoClient: true,
            useNewUrlParser: true
        })
        mongoose.Promise = global.Promise
        
        mongoose.connection.on('connected',()=>{
            console.log('Mongoose default connection open')
        })
        mongoose.connection.on('error',(err)=>{
            console.log('Mongoose default connection error : '+err)
        })
        mongoose.connection.on('disconnected',()=>{
            console.log('Mongoose default connection disconnected')
        })
        process.on('SIGINT',()=>{
            mongoose.connection.close(()=>{
                console.log('Mongoose default connection disconnected through app terminal')
                process.exit(0)
            })
        })
    }
}

const config = new ConfigterDB()

module.exports = config