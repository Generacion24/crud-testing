const sequelize = require('../utils/connection');
const citiesCreate = require('./createData/citiesCreate');

const main = async() => {
    try{
        await sequelize.sync({ force: true }); // la deja en cero
        await citiesCreate()
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();