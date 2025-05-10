import express from "express"
import bodyParser from "body-parser";
import usersRepo from "./repositories/Users"
import cookieSession from "cookie-session";

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  keys: ['isjdiekoi']
}))

app.get('/signup', (req, res) => {

})

app.post('/signup', (req, res) => {
  console.log(req.body);
  
})

app.get('/signout', (req, res) => {

})

app.get('/signin', (req, res) => {

})

app.post('/signin', (req, res) => {
  console.log(req.body);
  
})

app.listen(3002, () =>{

})