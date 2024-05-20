    require('dotenv').config();
    const development = {
        name: "development",
        assets: 'assets',
        session_cookie_key:'3XWyqFymkFeptIdb0l0JtLafQ9udB5sm',
        db: 'name',
        jwt_secret:'codeial',
        
    }

    const production = {
        name: 'production',
        assets: process.env.assets,
        session_cookie_key:process.env.session_cookie_key,
        db: process.env.db,
        jwt_secret: process.env.jwt_secret,
    }

    module.exports = eval(process.env.CODEIAL_ENVIROMENT)== undefined ? development : eval(process.env.CODEIAL_ENVIROMENT);