import { Sequelize } from 'sequelize';
import config from '../../config/db';

const sequelize = new Sequelize(config);

const r4m_rotas = sequelize.define('r4m_rotas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  CD_LOJA: {
    type: Sequelize.INTEGER,
  },
  DT_ROTA: {
    type: Sequelize.DATE,
  },
  STATUS: {
    type: Sequelize.INTEGER,
  },
  ETA: {
    type: Sequelize.DATE,
  },
  CD_MOTORISTA: {
    type: Sequelize.INTEGER,
  },
  CODCLI: {
    type: Sequelize.INTEGER,
  },
  NOMECLI: {
    type: Sequelize.STRING,
  },
  TRACKING_NUMBER: {
    type: Sequelize.STRING,
  },
  ROUTE_ID: {
    type: Sequelize.STRING,
  },
  ROUTE_DESTINATION_ID: {
    type: Sequelize.INTEGER,
  },
  FINALIZADA: {
    type: Sequelize.BOOLEAN,
  },
  MODIFIED_DATE: {
    type: Sequelize.DATE,
  },
  API_KEY: {
    type: Sequelize.STRING,
  },

});

export default r4m_rotas;
