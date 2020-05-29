import { Request, Response } from 'express'
import User from '../schemas/UserSchema'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.send(user)
  }
}

export default new UserController()
