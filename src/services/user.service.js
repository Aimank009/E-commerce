const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("user already exist with email:", email);
    }

    password = await bcrypt.hash(password, saltRounds);

    const user = await User.create({ firstName, lastName, email, password });

    console.log("Created User", user);
    return user;
  } catch (error) {
    throw new Error(error.message)
  }
};


const findUserById=async(userId)=>{
    try {
        const user=await User.findById(userId);
        if(!user){
            throw new Error("User not found with id:",userId)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
const findUserByEmail=async(email)=>{
    try {
        const user=await User.findOne({email});
        if(!user){
            throw new Error("User not found with email:",email)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

const getuserProfileByToken=async (token)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports={createUser,findUserById,findUserByEmail}