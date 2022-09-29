module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        name: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        
        // created: {
        //     type: Sequelize.DATE
        // },
    })
    return Product
}