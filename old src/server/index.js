const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/kudos", (req, res) => {
  salesForce.query(`SELECT Id, Name, Comment__c, Receiver__c, Sender__c FROM Kudos__c`).then((data) => {
    // return all of the fields from the object Kudos in SalesForce
    res.json(data.records.map(record => record._fields))
  });
});

app.get("/api/users", (req, res) => {
  salesForce.query(`SELECT id, name FROM Tiny_Improvements_User__c`).then((data) => {
    // return all of the fields from the object Tiny_Improvements_User__c in SalesForce
    res.json(data.records.map(record => record._fields))
  });
});

app.post("/api/kudos", (req, res) => {
  salesForce.createKudos(req.body).then(() => {
    res.json({ success: true })
  });
})


app.post("/api/kudos", (req, res) => {
  //add code here
})

app.listen(PORT, function () {
  console.log(`We are connected 🌎 on PORT ${PORT}`);
});
