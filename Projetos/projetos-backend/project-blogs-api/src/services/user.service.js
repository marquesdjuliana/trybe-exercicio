const { User } = require('../models');
const { generateToken } = require('../utils/authenticateToken');

const createUser = async (newUserDetails) => {
  const existingUser = await User.findOne({ where: { email: newUserDetails.email } });
  
  if (existingUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create(newUserDetails);
  if (newUser) {
      const token = generateToken({ id: newUser.dataValues.id, email: newUserDetails.email });
    return { status: 'CREATED', data: { token } };
  }
};
const listAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: users };
};
const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  return { status: 'SUCCESSFUL', data: user };
};
module.exports = {
  createUser,
  listAllUsers,
  getUserById,
};