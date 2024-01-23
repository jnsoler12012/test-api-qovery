import { Sequelize } from "sequelize";
console.log(process.env, process.env.POSTGRE_URL);
const URL = process.env.POSTGRE_URL || 'postgres://mainuser:8AQluCn0KKyEy7FSqXnCiyG1rEwn0nEd@dpg-cmni2nmn7f5s73ct39h0-a.oregon-postgres.render.com/ztechnology_db'

const dataBaseConnection = new Sequelize('postgres://mainuser:8AQluCn0KKyEy7FSqXnCiyG1rEwn0nEd@dpg-cmni2nmn7f5s73ct39h0-a.oregon-postgres.render.com/ztechnology_db', {
    dialectOptions: {
        ssl: true,
        useUTC: true, // -->Add this line. for reading from database
    },
    timezone: '-05:00', // -->Add this line. for writing to database
})

export default dataBaseConnection