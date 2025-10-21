import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: process.env.DIALECT_DB
    // dialectOptions: {
    //
    //   // Forzar para evitar SSL de bases de datos remota como de Render
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
    // },
    //
  })

