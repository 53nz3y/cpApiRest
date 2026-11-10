const User = require('../models/user');

/**
 * get all users
 * @param {Object} req - Express request object 
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

const getAllUsers = async (req, res, next) =>{
    try{
      const users = await useReducer.find();
      res.json(users);
    }
    catch(error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
};
//============ create new user ========================

const createUser = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;
        const user = new User({name, email, password});
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

//=========== update user by id =======================

const updateUser = async (req, res, next) => {
    try{
        const {id} = req.params;
        const {name, email, password} = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, password},
            {new : true}
        );
        res.json(updatedUser);
    }
    catch(error) {
        res.status(500).json({ error: 'Internal error watt'});
    }
};

//=================== delete user by id =========================

const deleteUser = async (req, res, next) => {
    try{
      const {id} = req.params;
      await User.deleteOne(id);
      res.json({ message : 'utilisateur bien supprimer'});
    }
    catch(error) {
       res.status(500).json({ error: 'Internal server error'})
    }
};
module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};