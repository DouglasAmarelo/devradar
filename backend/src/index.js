const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-sisl5.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params: request.query (Filtros, ordenação, paginação, etc.)
// Route Params: request.params (Identificar um recurso na alteraçãoou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// app.get('/', (request, response) => {
//   return response.json({
//     message: 'Hello Douglas'
//   });
// });

app.listen(3333);
