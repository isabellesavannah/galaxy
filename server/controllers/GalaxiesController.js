import express from "express";
import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id/stars", this.getAllStarsByGalaxyId)
      .post("", this.create)
      .delete("/:id", this.deleteGalaxy)
  }
  async getAll(req, res, next) {
    try {
      res.send(await galaxiesService.find(req.query))
    } catch (error) {
      next (error)
    }
  }
  async getAllStarsByGalaxyId(req, res, next){
    try {
      res.send(await starsService.find({galaxyId: req.params.id}))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(201, await galaxiesService.create(req.body))
    } catch (error) {
      next (error)
    }
  }
  async deleteGalaxy(req, res, next){
    try {
        res.send(await galaxiesService.delete(req.params.id))
    } catch (error) {
      next(error)  
    }
  }
}