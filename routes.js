const express= require('express')
const routes = express.Router();
routes.get('/product',
    (request,response)=> {
        response.send('hola');
    }
);
module.express = routes