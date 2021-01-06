const db = require("../../database/models");

module.exports = {
    getUsers: async function (req, res) {
        let users = await db.Users.findAll();
        return res.json(users);
    },

    createUser: async function (req, res) {
        console.log(req.body);

        let newUser = await db.Users.create({
            username: req.body.username,
            email: req.body.email,
            roleId: req.body.roleId,
            password: req.body.password
        });
        
        return res.json({
            message: 'Usuario creado exitosamente',
            data: newUser
        });
    },
    updateUser: async function (req, res) {
        console.log(req.params.id);
        console.log(req.body);

        let updatedUser = await db.Users.update({
            username: req.body.username,
            email: req.body.email,
            roleId: req.body.roleId,
            password: req.body.password
        },{
            where: {
                id: Number(req.params.id)
            }
        })
        return res.json({
            message: 'Usuario editado exitosamente',
            modifiedRows: updatedUser
        })
    }
}
