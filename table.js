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

export default userData;
