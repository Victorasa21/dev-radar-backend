const Dev = require('../models/Dev');
const stringToArray = require('../utils/stringToArray')

module.exports = {
    async index(req,res){
        const {latitude, longitude, techs} = req.query
        const techsArray = stringToArray.stringToArray(techs)
        try{
            let devs = await Dev.find({
                techs:{
                    $in:techsArray
                },
                location:{
                    $near:{
                        $geometry:{
                            type: 'Point',
                            coordinates:[longitude,latitude]
                        },
                        $maxDistance: 10000
                    }
                }
            })
            res.json(devs)
        } catch (err){
            console.log(err)
            res.json(err)
        }
    }
    
}