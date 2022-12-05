import { Request, Response } from 'express';
import response  from '../utils/response';
import itemServices from '../services/items.services';

const getItem = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const item = await itemServices.getItem(id);
        response.success(req, res, item, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

const getItems = async (req:Request, res:Response) => {
    try {
        const items = await itemServices.getItems();
        response.success(req, res, items, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

const setItem = async (req:Request, res:Response) => {
    try {
        const { id } = req.body;
        const item = await itemServices.setItem(id, req.body);
        response.success(req, res, item, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

const deleteItem = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const item = await itemServices.deleteItem(id);
        response.success(req, res, item, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

const upItem = async (req:Request, res:Response) => {
    try {
        const { body } = req;
        const item = await itemServices.upItem(body);
        response.success(req, res, item, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

export = { getItem, getItems, setItem, deleteItem, upItem }