
import {neon} from "@neondatabase/serverless"
require('dotenv').config();
const sql = neon(process.env.DATABASE_URL);

export default db