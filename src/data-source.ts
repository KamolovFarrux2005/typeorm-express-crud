import { DataSource } from 'typeorm';
import { Users } from './Entities/User';


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "typeormdb",
    synchronize: true,
    logging: false,
    entities: [Users]
})