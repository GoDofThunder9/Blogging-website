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