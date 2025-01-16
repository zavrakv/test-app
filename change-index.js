const fs = require("fs");
const path = require("path");
const {parse} = require("node-html-parser");

const baseIndexHtmlPath = path.join(process.cwd(), `src/index.html`);

const baseIndexHtmlFile = fs.readFileSync(baseIndexHtmlPath, {
  encoding: "utf-8",
});
const index = parse(baseIndexHtmlFile);
// index.querySelector("title").setAttribute("href", Math.random().toString());
// console.log(index)
// console.log("---------")
const h = index.querySelector("title");
h.insertAdjacentHTML("afterend", `<meta name="${Math.random().toString()}">`);
const resultHtml = index.toString();

fs.writeFileSync(
  path.join(process.cwd(), `src/index.html`),
  resultHtml,
  {
    encoding: "utf-8",
  }
);
