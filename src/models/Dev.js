const { Schema, model } = require('mongoose');
const PointSchema = require('../utils/PointSchema')

const DevSchema = new Schema({
  name:String,
  githubUsername: String,
  bio:String,
  avatar_url:String,
  techs:[String],
  location: {
    type:PointSchema,
    index:'2dsphere'
  }
});

module.exports = model('Dev',DevSchema);
