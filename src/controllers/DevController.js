const axios = require('axios');
const Dev = require('../models/Dev')
const stringToArray = require('../utils/stringToArray')

module.exports = {

    async index(req,res) {
        let devs = await Dev.find();
        res.json(devs)
    },

    async store(req,res) {

        const {githubUsername, techs, latitude, longitude} = req.body 

        let dev = await Dev.findOne({ githubUsername })

        if(!dev) {
            const response = await axios.get(`https://api.github.com/users/${githubUsername}`) 

            const {avatar_url, bio = '', name } = response.data
        
            const techsArray = stringToArray.stringToArray(techs)
        
            const location = {
                type:'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                githubUsername,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
    
        res.json(dev)
    
    },
    async destroy(req,res){
        const { id } = req.params
        let dev = await Dev.deleteMany({githubUsername:id})       
        res.json({resposta:dev})
    }
}