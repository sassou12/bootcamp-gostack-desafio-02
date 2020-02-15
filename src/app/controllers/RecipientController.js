import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      address_code: Yup.string().required(),
      number: Yup.string(),
      complement: Yup.string(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async index(req, res) {
    return res.json(
      await Recipient.findAll().map(recipient => {
        const { id, name, street, number } = recipient;
        return { id, name, street, number };
      })
    );
  }
}

export default new RecipientController();
