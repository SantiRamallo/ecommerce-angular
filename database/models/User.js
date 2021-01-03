module.exports = (sequelize, dataTypes) => {

    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        roleId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }

    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Roles, {
            as: "roles",
            foreignKey: "id"
        })


       
    }
    return User;   
}
