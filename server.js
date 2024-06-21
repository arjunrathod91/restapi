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
  const { name, content } = req.body;
  res.json(tasks);
})

app.post('/tasks',(req,res)=>{
  const { name, content } = req.body;
  const newTask = { name, content };
  console.log(newTask)
  tasks.push(newTask);
  res.status(200).json({ task: newTask });
})

app.listen(9000, () => {
  console.log("server is running");
});
