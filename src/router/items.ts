import { Router } from "express";
import controller from '../controllers/items';

const route = Router();

route.post('/', controller.upItem);
route.get('/:id', controller.getItem);
route.get('/', controller.getItems);
route.put('/', controller.setItem);
route.delete('/:id', controller.deleteItem);

export = route;