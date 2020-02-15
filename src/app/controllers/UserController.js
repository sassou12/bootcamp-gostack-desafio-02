import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }

  async index(req, res) {
    return res.json(await User.findAll());
  }
}

export default new UserController();
