import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());
app.get('/users', (request, response) => {

})

app.listen(3333)
