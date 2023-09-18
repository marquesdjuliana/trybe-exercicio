import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Package } from '../../types/Package';

export type UserInputtableFields = Optional<Package, 'id'>;
export type UserModelType = Model<Package, UserInputtableFields>;
type PackageSequelizeModelCreator = ModelDefined<Package, UserInputtableFields>;

const PackageModel: PackageSequelizeModelCreator = db.define('Package', { 
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, {
  tableName: 'packages',
  timestamps: false,
  underscored: true,
});
export default PackageModel;
