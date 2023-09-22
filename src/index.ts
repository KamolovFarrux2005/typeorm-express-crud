import express  from "express";
import {AppDataSource} from "./data-source";
import userRouter from "./routers/users";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/users', userRouter);

AppDataSource.initialize().then(()=>{
    console.log('Data Source has been initialized!');
    app.listen(3000, (): void => {
        console.log('Server Running!');
    })
}).catch((error) => {
    console.error(error.message);
});



