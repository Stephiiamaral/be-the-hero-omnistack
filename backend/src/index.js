const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
//app.use(cors({
   // PARA PRODUÇÃO origin: 'http://meuapp.com'
//}));
app.use(express.json());
app.use(routes);

app.listen(3333);



//Tipos de paramentros:
// Query params: parametros nomeados enviados na rota após "?" (Filtros, paginação);
// Route params: parametros utilizados para identificar recursos (:id);
//Request body: corpo da requisição, utilizado para criar ou alterar recursos.