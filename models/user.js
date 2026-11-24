module.export = (sequelize, DataTypes) => {
    const user = sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            autoIncrement: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqe: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return user;
}