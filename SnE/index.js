import express from "express"
import bodyParser from "body-parser";
import usersRepo from "./repositories/Users"

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {
  console.log(req.body);
  
})

app.listen(3002, () =>{

})