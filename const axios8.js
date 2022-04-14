const axios = require('axios');
const fs = require('fs');

async function makeGetRequest() {

    let res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    let data = res.data;
    fs.writeFileSync("read.json", JSON.stringify(data))
    console.log(JSON.stringify(data));
}
makeGetRequest();