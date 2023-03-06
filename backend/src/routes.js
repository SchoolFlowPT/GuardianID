import express from 'express';
const routes = express.Router();

import { getOAuthData } from './controllers/AccountManager';

routes.get('/v1.0/oauthData', getOAuthData);

module.exports = routes;