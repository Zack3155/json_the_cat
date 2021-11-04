const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let search = url + breedName;

  request(search, (err, resp, body) => {
    if (!err) {
      const data = JSON.parse(body);
      if (data && data.length && resp.statusCode === 200) {
        callback(null, data[0].description);
      } else if (resp.statusCode !== 200) callback('The request failed, plz check ur URL', null);
      else callback('The requested breed is not found', null);
    } else callback(err, null);
  });

};



module.exports = { fetchBreedDescription };