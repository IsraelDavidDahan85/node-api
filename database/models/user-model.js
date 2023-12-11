const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    });

    return User;
}

export default User;