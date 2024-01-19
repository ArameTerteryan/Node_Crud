var express = require("express");
var app = express();
const bodyParser = require('body-parser');
let path = require('path');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'));
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'./public/form.html'));

});

app.post('/addName', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    console.log('Received data:', name , age);
    res.redirect('/')
});



app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://arameterteryan:Arame1234@cluster0.1dtngnw.mongodb.net/?retryWrites=true&w=majority';


// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB!');
// You can add additional code here for testing or other operations
// Make sure to close the connection when you're done
mongoose.connection.close();
});