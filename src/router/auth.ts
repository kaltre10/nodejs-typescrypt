import { Router } from "express";
import controller from '../controllers/auth';

const route = Router();

route.post('/sign', controller.sign);
route.post('/login', controller.login);

export = route;