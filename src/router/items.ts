import { Router } from "express";
import controller from '../controllers/items';

const route = Router();

route.post('/', controller.upItem);

export = route;