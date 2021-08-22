const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:3000?resumeonly=true", {
        waitUntil: "networkidle2"
    });

     
    await page.pdf({
        path: "./resume.pdf",
        format: "Letter",
        printBackground: true,
        // width: '768px', // match the css width and height we set for our PDF
        // height: '906px',
    });

    await browser.close();
})();