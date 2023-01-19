const request = require("request");
const cheerio = require("cheerio");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

request(url, call_back);

function call_back(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    extractHTML(html);
  }
}

function extractHTML(html) {
  let $ = cheerio.load(html)
  const h2 = $(".ci-team-score:nth-child(2) .ds-text-tight-l");

  const table = $(
    ".ds-rounded-lg:nth-child(2) .ds-w-full:nth-child(1) > tbody"
  );

  console.log(table.text());

  console.log("...........................................");

  const players = $(".ds-rounded-lg tr > .ds-w-0 > .ds-inline-flex");
  console.log(players.length);
  // let htmlStr = "";
  for (let i = 0; i < players.length; i++) {
    console.log($(players[i]).text());
    // let chtml = $(players[i]).html();
    // htmlStr += chtml;
  }

  // console.log(htmlStr);

  

  console.log(h2.text());


  let sample_arr=$(".ds-rounded-lg:nth-child(3) .ds-w-full:nth-child(2) > tbody > tr> .ds-w-0:nth-child(2)")
  console.log("-----------------------------------------------------------------------")
  for(let i=0;i<sample_arr.length;i++){
    console.log($(sample_arr[i]).text())
  }
}


