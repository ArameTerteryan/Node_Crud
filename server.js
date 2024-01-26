var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var app = express();

const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://arameterteryan:Arame1234@cluster0.1dtngnw.mongodb.net/sample_mflix";

  mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', async () => {
  try {
  let result = await mongoose.connection.db.collection('theaters').find({'location.address.city':'Bloomington'}).toArray()
  res.render('../public/form.ejs', {
  obj: result
  });
  } catch (error) {
  console.error('Error retrieving movies:', error);
  } finally {
  mongoose.connection.close();
  }
  })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let info = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  res.render("../public/form.ejs", {
    obj:info
  });
});

app.post("/addName", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
});

app.listen(3000, function () {
  console.log("Example is running on port 3000");
});
