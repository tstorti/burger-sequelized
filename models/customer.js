
module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		name: {
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		}
	});

	Customer.associate = function(models) {
        // Associating Customer with Burgers
        Customer.hasMany(models.Burger, {
            onDelete: "cascade"
        });
	};
	
	return Customer;
};

