const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const name = process.argv[2];

let search = url + name;

request(search, (err, resp, body) => {
  if (!err) {
    const data = JSON.parse(body);
    //console.log(data, data.length);
    if (data && data.length && resp.statusCode === 200) console.log(data[0].description);
    else if (resp.statusCode !== 200) console.log('The request failed, plz check ur URL');
    else console.log('The requested breed is not found');
  } else console.log('Dear USER: ', err);
});