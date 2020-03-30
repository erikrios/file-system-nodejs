var fs = require('fs');

// Create a file named mynewfile1.txt
fs.appendFile('mynewfile1.txt', 'Hello from Erik', function (error) {
    if (err) throw err;
    console.log('Saved');
});