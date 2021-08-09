import r4m_permitidos from '../models/ClientesPermitidos';

exports.findAll = (req, res) => {
  r4m_permitidos.findAll()
    .then((data) => {
      res.status(200).send(data);
    });
};

exports.findOne = (req, res) => {
  const codcli = req.body.CODCLI;

  r4m_permitidos.findAll({ where: { CODCLI: codcli } })
    .then((data) => {
      res.send(data);
    });
};
