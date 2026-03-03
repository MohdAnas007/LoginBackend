import { Sequelize } from "sequelize";

const sequelize=new Sequelize('loginsignup','Anas','Anas48',{
    host:'localhost',
    dialect: 'postgres',
    logging:false,
})


sequelize.authenticate()
  .then(async () => {
    
    console.log('✅ Connected!');
    const [results] = await sequelize.query("SELECT current_database();");
    console.log('Currently connected to database:', results[0].current_database);


})
  .catch(err => console.log('❌ Still failing:', err.message));


export default sequelize;
