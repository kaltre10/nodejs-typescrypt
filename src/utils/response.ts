import { Request, Response } from 'express';

const success = ((req:Request, res:Response, data: Object, statusCode: number) => {
    const status = <number>statusCode || 200;
    res.status(status).json({
        error: false,
        data: data,
    })
});

const errors = ((req:Request, res:Response, data: string, statusCode: number) => {
    const status = <number>statusCode || 500;
    res.status(status).json({
        error: true,
        data: data,
    })
});

export = { success, errors };