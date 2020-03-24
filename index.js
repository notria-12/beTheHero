const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json({
        aluno: "Airton Sousa",
        semana: "Semana 11.0"
    });
});

app.listen(3333);