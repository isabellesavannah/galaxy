import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
  async create(body){
    return await dbContext.Galaxies.create(body)
  }
  async find(query={}) {
    let galaxies = await dbContext.Galaxies.find(query);
    return galaxies;
  }
  async findById(id) {
    let galaxy = await dbContext.Galaxies.findById(id);
    if (!galaxy) {
      throw new BadRequest("Invalid Id");
    }
    return galaxy;
  }
  async delete(id) {
    return await dbContext.Galaxies.findByIdAndDelete(id)
}
}

export const galaxiesService = new GalaxiesService();