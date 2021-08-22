// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/');
// //   await page.emulateMedia('screen');
//   await page.pdf({
//     path: './react.pdf', // path (relative to CWD) to save the PDF to.
//     printBackground: true,// print background colors
//     // width: '612px', // match the css width and height we set for our PDF
//     // height: '792px',
//   });
//   await browser.close();
// })()

// const React = require("react");
const ReactDOMServer = require("react-dom/server");
const puppeteer = require("puppeteer");
const Resume = require("./Resume")


// const element = React.createElement(
//   "div",
//   { style: { color: "red" } },
//   "Hello world!"
// );

const renderPdf = async (element) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = ReactDOMServer.renderToStaticMarkup(element);
  await page.setContent(html);

  await page.pdf({ path: "./result.pdf" });

  await page.close();
  await browser.close();
};

renderPdf(Resume);