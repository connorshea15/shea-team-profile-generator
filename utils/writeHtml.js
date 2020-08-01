const fs = require('fs');

const writeHTML = htmlContent => {
    fs.writeFile('./dist/team-profile.html', htmlContent, err => {
        if (err) throw err;

        console.log('your Team Profile is complete! Check out team-profile.html to see your team!');
    });
};

module.exports = writeHTML;