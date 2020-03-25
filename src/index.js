const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados
 * enviados na rota  após "?" (filtros/paginacão)
 *
 * Route Params:Parâmetros utilizados para
 * identificar recursos
 *
 * Request Body: Corpo da requisicão, utilizado para
 * criar ou alterar recursos.
 *
 * Métodos HTTP:
 * GET: Buscar/listar informacão do backend
 * POST: Criar uma informacão no backend
 * PUT: ALterar uma informacão no backend
 * DELETE: Deletar uma informacão do backend
 *
 * SQL: MySQL, SQLite, PostgreSQL
 * NoSQL: MongoDB...
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 *
 */

