import { Sequelize } from 'sequelize';
import config from '../../config/db';

const sequelize = new Sequelize(config);

const r4m_permitidos = sequelize.define('r4m_permitidos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  CODCLI: {
    type: Sequelize.INTEGER,
  },
  STATUS: {
    type: Sequelize.INTEGER,
  },

});

export default r4m_permitidos;
