/* Learn about the file module */

const fs = require('fs');

// writeFile will make the new file
fs.writeFileSync('bio.txt', 'My name is Dhruvik Gondaliya');

//appendFile will add the data to the existing file
fs.appendFileSync('bio.txt', " I am in the final year");

//readFile return data into binary 
fs.readFileSync('bio.txt');

//rename will rename the file 
fs.rename('bio.txt', 'mybio.txt', (err) => {
    if (err) throw err;
    console.log("Renamed");
});

// unlink will delete the file 
fs.unlinkSync('mybio.txt',(err) => {
    if(err) throw err;
    console.log("Deleted");
});



