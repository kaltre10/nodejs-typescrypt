import 'dotenv/config';
import { connect } from 'mongoose';

const dbConnect = async () => {
    const DB_URL = <string>process.env.DB_URL;
    try {
        await connect(DB_URL);
        console.log(`DB running`);
    } catch (error) {
        console.log(`error DB ${error}`);
    }
}

export default dbConnect;