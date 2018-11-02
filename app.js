const express = require("express");
let f = require("./file.json");
const fs = require("fs");
console.log("Already in JSON file: \n", f);
var app = express();
var user = ""
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/", (req, res) => {
  fs.readFile("file.json", (err, data) => {
    if (err) throw err;
    content = JSON.parse(data);
    content.table.push(req.body);
    json = JSON.stringify(content);
    fs.writeFile("file.json", json, "utf8", (err, data) => {
      if (err) console.log(err);
      console.log("Success");
    });
  });
  console.log(f);

  res.send({ status: "Received" });
});

app.get("/logout", (req,res)=>{
  console.log("In logout");
  user =""
  console.log(user)
  res.send({status:true})
})


app.post("/login", (req, res) => {
  console.log("Logging in... ",req.body)
  user = "fdsa"
  res.send({ status: true, session: "fdsa" });
});

app.get("/session",(req,res)=>{
  console.log("In session");
  res.send({user: user})
})

app.post("/register", (req, res) => {
  console.log("Registring... ",req.body)
  res.send({ status: true });
});
app.post("/postOrder", (req, res) => {
  console.log("Posting... ",req.body)
  res.send({ status: true });
});
app.listen(3010, () => console.log("listening on port 3010..."));
