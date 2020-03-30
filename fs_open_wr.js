var fs = require('fs');

fs.open('mynewfile2.txt', 'w+', function (err, file) {
    if (err) throw err;

    // A content to write in the file
    let content = "Hello Erik!";

    // Write the content to file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });

    // Read file
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });
});