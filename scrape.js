const request = require('request');
const cheerio = require('cheerio');


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('test');
    
    link.addEventListener('click', function() {     
request('http://www.svc.ac.th/index.php/th/1683-%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%96%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%B0-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%96%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5%E0%B8%AA%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%88%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%94%E0%B8%B2-%E0%B8%9E%E0%B8%B1%E0%B8%8A%E0%B8%A3%E0%B8%AA%E0%B8%B8%E0%B8%98%E0%B8%B2%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%A5%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%99%E0%B8%B5-%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%89%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%99%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%A9%E0%B8%B2.html', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const siteHeading = $('.body-innerwrapper');

        const output = siteHeading.find('p').text(); 
                 const x = document.getElementById("demo");
                 x.textContent = output;     
        console.log(output);

    }
});
    });
});