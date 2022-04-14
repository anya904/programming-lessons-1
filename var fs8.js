var fs = require('fs');
const axios = require('axios');
async function makeGetRequest() {

    let res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    let data = res.data;
    fs.writeFileSync("read.json", JSON.stringify(data))
    console.log(JSON.stringify(data));
}
makeGetRequest();
var data = fs.readFileSync('read.json', 'utf8');
var words = JSON.parse(data);
var bodyparser = require('body-parser');
console.log(words);
var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log("listening..");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.get('/get/:id', function (req, res) {

    var i;

    for (i = 0; i < words.length; ++i) {
        if (words[i].id == req.params.id) {
            res.send(words[i]);
        }
    }
    console.log("success");

});