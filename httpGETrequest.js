const http = require('http');
const api = require('./apikey.json')

function printResult(movie) {
  console.log(movie);
}
function getMovie(movie) {
  const url = `http://www.omdbapi.com/?apikey=${api.key}&t=${movie}`;
  const request = http.get(url, response => {
    if(response.statusCode === 200) {
      let body = '';
      response.on('data', data => {
        body += data.toString();
      }); // end on data
      response.on('end', () => {
        const dataParsed = JSON.parse(body);
        console.log(dataParsed);
      })
    } // end if
  });
}

const query = process.argv.slice(2);
getMovie(query.join('+'));
