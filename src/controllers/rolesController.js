
const db = require("../database/models");
const { Op } = require("sequelize");


module.exports = {

    getRoles: async function (req, res) {
        let roles = await db.Roles.findAll();
         return res.json(roles);
    }

}
