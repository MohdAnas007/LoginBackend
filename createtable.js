import sequelize from "./Db.js"
import userData from "./table.js";
const createTable=async()=>{
    try{
        await sequelize.sync({alter:true});


        console.log("table created");

    }
    catch(err){
        console.log("error in creating table",err.message);
    }
}
createTable();
