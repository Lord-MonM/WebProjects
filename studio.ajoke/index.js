import express from 'express';
import bodyParser from "body-parser";
import usersRepo from "./repositories/Users";
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
 keys: ['sjiojsdjijoe']
}))

app.get('/signup', (req, res) => {

})

app.post('/signup', (req, res) => {

})

app.get('/signout', (req, res) => {

})

app.get('/signin', (req, res) => {

})

app.post('/signin', (req, res) => {

})

app.listen(3001, () => {

})