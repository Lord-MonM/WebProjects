import express from 'express';
import bodyParser from "body-parser";
import usersRepo from "./repositories/Users";

const app = express(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

})

app.listen(3001, () => {

})