const fs = require('fs');

const server = require('./run');


(async function() {
  
  const data = await new Promise((resolve) => {
    fs.readFile(__dirname + '/../business/play/data.js', 'utf-8',
      function(err, data) {
        resolve(data);
      }
    )
  });

  const template = await new Promise((resolve) => {
    fs.readFile(__dirname + '/../business/play/template.tpl', 'utf-8',
      function(err, data) {
        resolve(data);
      }
    )
  });

  server({
    '/play': { data, template }
  });

})()
