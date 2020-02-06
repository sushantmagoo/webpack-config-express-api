import jwt from 'jsonwebtoken';
import Keys from '../config/Keys';

export function signJwt(user_data) {
  return new Promise((resolve, reject) => {
    // * PROPS FOR SIGNING JWT
    const { email_id, _id, role } = user_data;
    jwt.sign(
      { email_id, user_id: _id, role },
      Keys.JWT_SECRET,
      { expiresIn: 60 * 60 * 24 * 30 }, // * FOR 30 DAYS
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

export function verifyJwt(token, role) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, Keys.JWT_SECRET, (error, token_info) => {
      if (error) {
        reject('invalid request headers, provided token is malfunctioned');
      }
      if (!(token_info.role == role)) {
        reject('provided jwt is not authorized for this request');
      }
      resolve(token_info);
    });
  });
}
