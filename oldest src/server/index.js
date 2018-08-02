const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// const awards = [
//     {
//         id: 1,
//         title: "Best Boss Award!",
//         comment: "Thanks for always looking out for us."
//     },
//     {
//         id: 2,
//         title: "Longest Commute Award!",
//         comment: "I can't believe Leslie makes it to work as often as she does."
//     },
//     {
//         id: 3,
//         title: "Most likely to nap at work!",
//         comment: "Maybe you need more coffee."
//     }
// ]

const users = [{
    userId: 45089,
    name: "Owen",
    position: "Captian of the Breakroom"
},
{
    userId: 223,
    name: "Brooke",
    position: "Winner of All Dance-Offs"
},
{
    userId: 6582,
    name: "Gobi",
    position: "King of Mid-Day Naps"
}
]
// NEW CODE
app.get("/api/kudos", (req, res) => {
    salesForce.query("SELECT id, Name, Comment__c FROM Kudos__c").then(data => {
        res.json(data.records.map(record => record._fields));
    });
});
// NEW CODE
app.get("/api/users", (req, res) => res.json(users));

app.post("/api/kudos", (req, res) => {
    awards.push(req.body);
    res.json(awards);
});

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
