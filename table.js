import { DataTypes } from 'sequelize';
import sequelize from './Db.js';

const userData=sequelize.define('loginsignup',{
     fullname:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     userName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
     },
     password:{
        type:DataTypes.STRING,
        allowNull:false,
     }
},
{
    tableName:'user_data',
    timestamps:false,

}
)

try {
    await sequelize.sync({ alter: true });
    console.log("✅ Table 'user_data' synchronized successfully");
} catch (err) {
    console.error("❌ Error syncing table:", err.message);
}
export default userData;
