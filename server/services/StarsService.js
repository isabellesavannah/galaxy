import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async create(body){
    return await dbContext.Stars.create(body)
  }
  async find(query={}) {
    return await dbContext.Stars.find(query).populate("galaxyId", "name")
  }
  async findById(id) {
    let star = await dbContext.Stars.findById(id);
    if (!star) {
      throw new BadRequest("Invalid Id");
    }
    return star;
  }
}
export const starsService = new StarsService();