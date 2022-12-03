import "dotenv/config";
import express from 'express';
import cors from 'cors';
import dbConnect from "./config/mongo";
const app = express();
const port = <string>process.env.PORT || 3000;
import route from './router';

const start = () => {
    dbConnect();

    //permisos cors
    app.use(cors());

    //response json
    app.use(express.json());

    //routers
    app.use('/', route);


    app.listen(port, () => console.log(`server running on ${port}`));
}

export default start;
