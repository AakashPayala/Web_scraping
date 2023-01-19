const request = require('request');
const cheerio = require("cheerio");
request('https://www.worldometers.info/coronavirus/', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
    if(error){
        console.log(error);
    }
    else{
        handle_html(body);
    }
});

function handle_html(html){
    let selTool=cheerio.load(html);
    let h1s=selTool("h1");
    console.log(h1s.length); //prints 3
    console.log(h1s.text());
}

