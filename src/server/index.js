const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();
const users = [
    {
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
        position: "King of Mid-Day Naps1"
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/users", (req, res) => res.json([users]));

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
const friends = [
    {
        name: 'Annie Katz',
        location: 'Macon, GA'
    },
    {
        name: 'Alia Bisat',
        location: 'New York, NY'
    },
    {
        name: 'Dartaniel Bliss',
        location: 'Chicago, Il'
    },
    {
        name: 'Jacob Neuburger',
        location: 'Chicago, Il'
    },
    {
        name: 'Stacey Lockerman',
        location: 'Washington, DC'
    },
    {
        name: 'Weldon Ledbetter',
        location: 'Atlanta, GA'
    }
];
app.get("/api/friends", (req, res) => res.json(friends));

app.listen(PORT, function () {
    // console.log('We are connected on PORT ${PORT}');
})

awards: [
    {
        id: 1,
        title: "Best Boss Award!",
        comment: "Thanks for always looking out for us.",
        sender: "Fabian",
        receiver: "Leon"
    },
    {
        id: 2,
        title: "Longest Commute Award!",
        comment: "I can't believe Leslie makes it to work as often as she does.",
        sender: "Archit",
        receiver: "Laura"
    },

    app.post("/api/awards", (req, res) => {
        console.log("----THE REQUEST BODY-------------------------------");
        console.log(req.body);
        console.log("-----------------------------------");
        awards.push(req.body);
        res.json(awards)
    });
