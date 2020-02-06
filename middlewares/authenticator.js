import { verifyJwt } from '../utils/jwt';

// !NOTE: `/login` & `/signup` route are corner cases where `authorization` is not required
export async function verifyAdmin(req, _, next) {
  if (
    req.url === '/login' ||
    req.url === '/login/' ||
    (req.url === '/signup' || req.url === '/signup/')
  ) {
    return next();
  }
  const token = req.headers['authorization'];
  if (token) {
    let token_info = {};
    try {
      token_info = await verifyJwt(token, 'ADMIN');
    } catch (err) {
      // TODO:
    }
    req.body.email_id = token_info.email_id;
    req.body.user_id = token_info.user_id;
    return next();
  } else {
    // TODO:
  }
}
