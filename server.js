const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const tasks = [
  {
    name:'task1',
    content:'content1'
  },
  {
    name:'task12',
    content:'content3'
  },
  {
    name:'task3',
    content:'content3'
  }
]

app.get('/tasks',(req,res)=>{
  res.json(tasks);
})

app.listen(9000, () => {
  console.log("server is running");
});
