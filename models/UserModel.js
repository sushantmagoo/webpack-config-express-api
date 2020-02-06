import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import Keys from '../config/Keys';

const UserSchema = new Schema(
  {
    email_id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.methods.generateHash = async function(password) {
  let salt = '';
  let hash = '';
  try {
    salt = await bcrypt.genSalt(parseInt(Keys.SALT_ROUNDS));
  } catch (err) {
    console.log(err);
  }
  try {
    hash = await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }
  return hash;
};

UserSchema.methods.verifyPassword = async function(password) {
  let res = false;
  res = await bcrypt.compare(password, this.password);
  return res;
};

export default model('User', UserSchema);
