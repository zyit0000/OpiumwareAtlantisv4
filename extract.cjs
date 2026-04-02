const fs = require('fs');
const html = fs.readFileSync('src/index.html', 'utf8');
const scripts = [...html.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)];
console.log("Found " + scripts.length + " scripts.");
scripts.forEach((s, i) => {
  fs.writeFileSync('script' + i + '.cjs', s[1]);
});
