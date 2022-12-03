import { Request, Response } from 'express';
import response  from '../utils/response';

const getItem = (req:Request, res:Response) => {
   
}

const getItems = (req:Request, res:Response) => {

}

const setItem = (req:Request, res:Response) => {

}

const deleteItem = (req:Request, res:Response) => {

}

const upItem = (req:Request, res:Response) => {
    try {
        const { body } = req;
        response.success(req, res, body, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

export = { getItem, getItems, setItem, deleteItem, upItem }