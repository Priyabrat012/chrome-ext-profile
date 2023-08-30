const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')



//new || profiles
const Profile = db.profiles
// add post request

const addProfile =  async (req, res) => {
    try {
      const profile = await Profile.create(req.body);
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
//new
// main work


module.exports = {
    addProfile
    
}