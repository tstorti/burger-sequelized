module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
		},
	});

	Burger.associate = function(models) {
		// Data must belong to a sensor id
		Burger.belongsTo(models.Customer, {	});
    };
	return Burger;
};

