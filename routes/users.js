var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/list', function(req, res, next) {
  var data=[
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22}
  ]
  res.json({
    code:200,
    data:data
  });
});

module.exports = router;
