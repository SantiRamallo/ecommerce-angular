module.exports = (sequelize, dataTypes) => {

    let alias = "Roles";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: "roles",
        timestamps: false,
        underscored: true
    }

    const Role = sequelize.define(alias, cols, config);


    Role.associate = function (models) {
        Role.hasMany(models.Users, {
            as: "users",
            foreignKey: "FK_roles_users"
        })
        return Role;
    }
}
