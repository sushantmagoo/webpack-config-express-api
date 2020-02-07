import { verifyJwt } from '../utils/jwt';
import { ErrorHandler } from './errorHandler';

// !NOTE: `/login` & `/signup` route are corner cases where `authorization` is not required
export async function verifyAdmin(req, _, next) {
  if (
    req.url === '/login' ||
    req.url === '/login/' ||
    (req.url === '/signup' || req.url === '/signup/')
  ) {
    next();
  }
  try {
    const token = req.headers['authorization'];
    if (token) {
      let token_info = {};
      try {
        token_info = await verifyJwt(token, 'ADMIN');
      } catch (err) {
        throw new ErrorHandler(400, err, 'unable to authenticate user');
      }
      req.body.email_id = token_info.email_id;
      req.body.user_id = token_info.user_id;
    } else {
      throw new ErrorHandler(
        400,
        'cannot proceed without authorization token',
        'unable to authenticate user'
      );
    }
    next();
  } catch (err) {
    next(err);
  }
}
