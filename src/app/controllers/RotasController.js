/* eslint-disable no-console */
import axios from 'axios';
import r4m_rotas from '../models/Rotas';

exports.findAll = (req, res) => {
  r4m_rotas.findAll()
  .then((data) =>{
    res.json(data);
  })
};

exports.findOne = (req, res) => {
  const codcli = req.query.cliente;
  console.log(codcli);

  r4m_rotas.findAll({ limit: 10, where: { CODCLI: codcli } })
    .then((data) => {
      
      const rotas_url = []

      const arr = data.map(function (index, key) {
        const api = index.API_KEY;
        const route = index.ROUTE_ID
        const destination = index.ROUTE_DESTINATION_ID
        const url = `https://api.route4me.com/api.v4/address.php?api_key=${api}&route_id=${route}&route_destination_id=${destination}`
        
        rotas_url.push(url)

      })

      async function getRotas(){
        
        const fetchrotas = rotas_url.map((data) => axios.get(data)
        .then((data)=>{
          return data.data;
          })
        )
        const rotas = await Promise.all(fetchrotas)
        .then((values) => {
          res.send(values)
        })
      }

      getRotas();


      
     
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// https://api.route4me.com/api.v4/address.php?api_key={$apikey}&route_id={$route}&route_destination_id={$routed}
