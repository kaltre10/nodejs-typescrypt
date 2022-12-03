import { Router} from 'express';
import  { readdirSync } from 'fs';

const route = Router();
const PATH_ROUTER = __dirname;
const fileRouters = readdirSync(PATH_ROUTER);
const cleanFileName = (fileName: string) => fileName.split('.').shift();

fileRouters.filter((f: string) => {
    if(f === 'index.ts') return;
    let file = cleanFileName(f);
    import(`./${file}`).then(moduleRoute => route.use(`/${file}`, moduleRoute.default))
})
   
export default route;