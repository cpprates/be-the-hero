const generateUniqueId = require('../utils/generateUniqueId.JS');
const connection = require('../database/connection')

module.exports = {

    // Nome do método é index()
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    // Nome do método é create()
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }

};