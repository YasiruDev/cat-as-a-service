module.exports = {
    BASE_URL: process.env.BASE_URL, 
    IMAGE_NAME : 'cat-card.jpg',
    MSG: {
        CATS_FETCH: 'Cats fetch success',
    },
    PARAM_VALIDATION: {
        GREETING: 'greeting',
        WHO: 'who',
        WIDTH: 'width',
        HEIGHT: 'height',
        COLOR: 'color',
        SIZE: 'size',
        UNDERSCORE : '_',
        NUMBER: 'should be a number',
        STRING: 'should be a string',
    },    
    END_URL: {
        GET_CAT: 'cat/says/'
    },    
    LOG_TYPE: {
        ERROR: 'error',
        FATAL: 'fatal',
        INFO: 'info',
        CATS: 'Cats Activities',
    },
    METHODS: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
    },
    MAP_OBJ :{
        SIZE_KEY :{
            size:'s',
            color:'c'
        }
    },  
    FORMAT :{
        BINARY : 'binary',
        TIME : 'YYYY-MM-DD HH:mm:ss'
    }
}