const Dev = require('../models/Dev');

const parseStringToArray = require('../utils/parseStringToArray');

// Objetivos:
// - Buscar todos os Devs em um raio de 10km
// - Filtrar por tecnologias

const index = async (request, response) => {
  const { latitude, longitude, techs } = request.query;

  const techsArray = parseStringToArray(techs);

  const devs = await Dev.find({
    techs: {
      $in: techsArray,
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [
            longitude,
            latitude
          ],
        },
      },
      $maxDistance: 10000,
    },
  });

  return response.json({ devs });
};

module.exports = { index };
