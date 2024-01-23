import { Sequelize } from "sequelize";
console.log(process.env, process.env.POSTGRE_URL);
const URL = process.env.POSTGRE_URL

const dataBaseConnection = new Sequelize(URL, {
    dialectOptions: {
        ssl: true,
        useUTC: true, // -->Add this line. for reading from database
    },
    timezone: '-05:00', // -->Add this line. for writing to database
})

export default dataBaseConnection