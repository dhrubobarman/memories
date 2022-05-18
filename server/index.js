import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cores from 'cors';
import postRoutes from './routes/ports.js'


const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cores());

app.use('/posts', postRoutes);

const CONNECTIONURL = 'mongodb+srv://dhrubobarman847:vgpbpddcsw847@cluster0.wv7lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running at port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);