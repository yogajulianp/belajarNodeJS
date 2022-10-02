module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("userProduct", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		username: {
			type: Sequelize.STRING
		},
        password: {
			type: Sequelize.STRING
		}		
        
        // created: {
        //     type: Sequelize.DATE
        // },
    })
    return Product
}