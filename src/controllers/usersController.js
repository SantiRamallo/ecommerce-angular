const db = require("../../database/models");

module.exports = {
    getUsers: async function (req, res) {
        let users = await db.Users.findAll();
         return res.json(users);
    },

    createUser: async function (req,res) {
        console.log(req.body);

        await db.Users.create({
            username: req.body.name,
            email: req.body.email,
            role_id: req.body.role_id,
            password: req.body.password
        });
    }
}