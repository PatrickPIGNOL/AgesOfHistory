const express = require("express");
const app = express();
app.use(express.static("public"));

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

function mHTMLHeader() {
  let vHTML =
    "<!DOCTYPE html>" +
    "<html lang='fr'>" +
    "<head>" +
    "<meta charset='utf-8'>" +
    "<title></title>" +
    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1'>" +
    "<meta name='description' content='A cool thing made with Glitch'>" +
    "<link id='favicon' rel='icon' href='' type='image/x-icon'>" +
    "<!-- import the webpage's stylesheet -->" +
    "<link rel='stylesheet' href='style.css'>" +
    "</head>" +
    "<body bgcolor='#303030'>";
  return vHTML;
}

function mHTMLFooter() {
  let vHTML = "</table></body></html>";
  return vHTML;
}

app.get("/", (request, response) => {
  let vHTML = mHTMLHeader();
  vHTML += ""+
      //"<canvas id='canvas'></canvas>"+
      "<script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js'></script>"+
      "<script src='ClientApplication.js'></script>";
  vHTML += mHTMLFooter();
  response.send(vHTML);
});