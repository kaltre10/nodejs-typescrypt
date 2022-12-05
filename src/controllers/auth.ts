import { Request, Response } from 'express';
import response  from '../utils/response';
import authServices from '../services/auth.services';
import bcrypt from 'bcrypt';

const login = async (req:Request, res:Response) => {
    const {email, pass} = req.body;
    try {
        const user = await authServices.getUser(email);
        if(!user) throw "data Invalid";
        const passCompare = await bcrypt.compare(pass, user.pass);
        if(!passCompare) throw "data Invalid";
        const data = { email: user.email, id: user.id}
        response.success(req, res, data, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

const sign = async (req:Request, res:Response) => {
    try {
        const { body } = req;
        if(!body.email || !body.pass || !body.name) throw "Error";
        const passHash = await bcrypt.hash(body.pass, 8);
        const newUser = { 
            name: body.name,
            email: body.email, 
            pass: passHash
        }
        const user = await authServices.upUser(newUser);
        response.success(req, res, user, 200);
    } catch (error) {
        console.log(error);
        response.errors(req, res, <string>error, 500);
    }
}

export = { login, sign }