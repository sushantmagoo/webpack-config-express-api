import UserModel from '../models/UserModel';
import { signJwt } from '../utils/jwt';
import validateEmail from '../utils/validateEmail';
const ROLE = 'ADMIN';

// TODO:
export default {
  /**
   * @description Signup for Admin
   */
  async signup(req, res) {
    const { email_id, password, firstName, lastName } = req.body;
  },

  /**
   * @description Login for Admin
   */
  async login(req, res) {
    const { email_id, password } = req.body;
  }
};
