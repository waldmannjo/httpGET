const http = require('http');
const colors = require('colors');
try {
  const api = require('./api_key/apikey.json');

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

  function printResult(movie) {
    console.log(movie);
  }

  const query = process.argv.slice(2);
  getMovie(query.join('+'));

} catch (e) {
  console.error(e.message.red);
}
