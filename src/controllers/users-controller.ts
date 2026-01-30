import { Request, Response } from "express";
class UsersController {
  async create(request: Request, response: Response) {
    response.json({ message: "ok" });
  }
  //   async update() {}
  //   async delete() {}
  //   async list() {}
  //   async get() {}
}

export { UsersController };
