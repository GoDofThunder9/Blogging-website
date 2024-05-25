const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

// Ensure the log directory exists
const logDirectory = path.join(__dirname, '../production_logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // Rotate daily
    path: logDirectory
});


    const development = {
        name: "development",
        assets: 'assets',
        session_cookie_key:'3XWyqFymkFeptIdb0l0JtLafQ9udB5sm',
        db: 'name',
        morgan:{
            mode:'dev',
            options:{stream: accessLogStream}
        }
        
    }

    const production = {
        name: 'production',
        assets: process.env.assets,
        session_cookie_key:process.env.session_cookie_key,
        db: process.env.db,
        morgan:{
            mode:'combined',
            options:{stream: accessLogStream}
        }
    }
    module.exports = eval(process.env.CODEIAL_ENVIROMENT)== undefined ? development : eval(process.env.CODEIAL_ENVIROMENT);