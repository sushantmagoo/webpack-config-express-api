import express from 'express';
import bodyParser from 'body-parser';
import Keys from './config/Keys';
import './config/DBConfig';
import { verifyAdmin } from './middlewares/authenticator';
import { handleError } from './middlewares/errorHandler';
import AdminRoute from './routes/AdminRoute';

const PORT = Keys.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/admin', verifyAdmin, AdminRoute);

app.use((err, _, res, __) => handleError(err, res));

app.listen(PORT, () => console.log('*** listening on port: ' + PORT + ' ***'));
