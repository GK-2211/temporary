const express=require ('express');
const router=express.Router();
const bodyParser=require('body-parser')
const db=require('../db');

router.use(bodyParser.json({urlencoded:true}));


router.get('/:region', function(req, res, next) {
    const region = req.params.region;
    var sql = `SELECT auxaddres, type FROM ev.electric_vehicle_charging_station_list where region=?;`;
    db.query(sql,[region],function(err, row, fields) {
      if(err) {
        console.log(err)
      }
      else
      res.json(row);  
    })
  });
 
  module.exports=router;

  


