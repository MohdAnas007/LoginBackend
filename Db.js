import { Sequelize } from "sequelize";
import userData from "./table.js";
const dbUrl = process.env.DATABASE_URL || 'postgres://anas:Anas48@localhost:5432/loginsignup';

const sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        // REQUIRED: Render's managed databases require SSL/Encryption
        ssl: process.env.DATABASE_URL ? {
            require: true,
            rejectUnauthorized: false
        } : false
    }
});

sequelize.authenticate()
  .then(async () => {
    console.log('✅ Connected to Database!');
    const [results] = await sequelize.query("SELECT current_database();");
    console.log('Database Name:', results[0].current_database);
})
  .catch(err => console.log('❌ Connection failed:', err.message));

export default sequelize;