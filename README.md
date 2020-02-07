# webpack-config-express-api

### TODO: Please set `env` variable before starting this app

- `NODE_ENV` = ""
- `PORT` = "" // DEFAULT: 3000
- `SALT_ROUNDS` = ""
- `JWT_SECRET` = ""
- `DB_HOST` = "" // FOR `staging`/`production`
- `DB_PORT` = "" // FOR `staging`/`production`
- `DB_NAME` = "" // FOR `staging`/`production`
- `DB_USER` = "" // FOR `staging`/`production`
- `DB_PASS` = "" // FOR `staging`/`production`
- `LOCAL_DB_STRING` = "" // FOR `development` | EXAMPLE: `mongodb://localhost:27017/db_name`

### TO RUN ON DEVELOPMENT/LOCAL MACHINE

1. Create `.env` file in `config` directory
2. `npm i`
3. `npm run dev`

### TO RUN ON SERVER

1. Create `.env` file in `config` directory
2. `npm run build`
3. `npm run deploy` // NOTE: Incase of error, `chmod +x ./deployment.sh`

### Dependencies:

- `bcrypt`
- `body-parser`
- `express`
- `jsonwebtoken`
- `mongoose`

### Dev Dependencies:

- `@babel/cli`
- `@babel/core`
- `@babel/node`
- `@babel/polyfill`
- `@babel/preset-env`
- `babel-loader`
- `dotenv`
- `dotenv-webpack`
- `nodemon`
- `rimraf`
- `webpack`
- `webpack-cli`
- `webpack-node-externals`
