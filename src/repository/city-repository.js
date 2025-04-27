const { City } = require("../models");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name: name,
      });
      return city;
    } catch (error) {
        console.error("Error creating city:", error);
        throw {error};
    }
  }

  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },  
      });
      return true;
    } catch (error) {
      console.error("Error deleting city:", error);
      throw {error};
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.error("Error updating city:", error);
      throw {error};
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.error("Error fetching city:", error);
      throw {error};
    }
  }
}

module.exports = CityRepository;
