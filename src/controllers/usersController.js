const db = require("../../database/models");

module.exports = {
    getUsers: async function (req, res) {
        let users = await db.Users.findAll();
        return res.json(users);
    },

    createUser: async function (req, res) {
        console.log(req.body);

        let newUser = await db.Users.create({
            username: req.body.name,
            email: req.body.email,
            roleId: req.body.role_id,
            password: req.body.password
        });
        
        return res.json({
            message: 'Usuario creado exitosamente',
            data: newUser
        });
    }
}
