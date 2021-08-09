import Router, { response } from 'express';
import axios from 'axios';
import r4m_permitidos from './app/controllers/ClientesPermitidosController';
import r4m_rotas from './app/controllers/RotasController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ 
    API: 'Pecista - Distribuição e Representação de Autopeças',
    Version: '0.0.1',
    DocumentationURL: 'https://github.com/PecistaTecnologia'
  });
});

routes.get('/clientespermitidos', r4m_permitidos.findAll);
routes.post('/cliente', r4m_permitidos.findOne);

routes.get('/todas_rotas', r4m_rotas.findAll);
routes.get('/rotas', r4m_rotas.findOne);


export default routes;
