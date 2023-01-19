const request = require("request");
const cheerio = require("cheerio");

url =
    "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
request(url, call_back);

function call_back(err, res, html) {
    if (err) {
        console.log(err);
    } else {
        extractHtml(html);
    }
}

function extractHtml(html) {
    let $ = cheerio.load(html);
    // console.log($.text())

    let playerNames = $(".ds-table-md tr > .ds-w-0:nth-child(1)");
    console.log($(playerNames).length);
    for (let i = 0; i < playerNames.length; i++) {
        // console.log($(playerNames[i]).hasClass("ds-inline-flex ds-items-start ds-leading-none"))
        if($(playerNames[i]).find(".ds-inline-flex ds-items-start ds-leading-none")){

            console.log($(playerNames[i]).text());
            console.log($(playerNames[i]).find("a").attr("href"))
        }
    }
}
