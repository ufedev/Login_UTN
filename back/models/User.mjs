import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/db.mjs"


export class User extends Model {

}

User.init({
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Coloque un email valido"
      }
    }
  },
  hash: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  isActivate: {
    type: DataTypes.BOOLEAN,
    default: false
  },
  activateToken: {
    type: DataTypes.STRING
  }
}, {
  tableName: "users",
  sequelize
})
