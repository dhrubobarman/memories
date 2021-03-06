import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cores from 'cors';
import postRoutes from './routes/ports.js'
import dotEnv from 'dotenv';


const app = express();
dotEnv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cores());

app.use('/posts', postRoutes);

const PORT = process.env.port || 5000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running at port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);