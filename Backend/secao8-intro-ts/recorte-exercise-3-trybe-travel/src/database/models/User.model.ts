import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

export type UserInputtableFields = Optional<User, 'id'>;
export type UserModelType = Model<User, UserInputtableFields>;
// export type UserModelType = ModelDefined<User, UserInputtableFields>;
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

// const UserModel: UserModelType = db.define<Model<User, UserInputtableFields>>('User', { 
const UserModel: UserSequelizeModelCreator = db.define('User', { 
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});
export default UserModel;
