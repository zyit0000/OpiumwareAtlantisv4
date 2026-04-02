const fs = require('fs');
const html = fs.readFileSync('src/index.html', 'utf8');
const scripts = [...html.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)];
console.log("Found " + scripts.length + " scripts.");
fs.writeFileSync('script3.js', scripts[3][1]);
