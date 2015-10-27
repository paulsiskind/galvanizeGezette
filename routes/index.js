var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/taco');
var tacoBag = db.get('taco');

router.get('/', function(req, res, next){
  tacoBag.find({}, function(err, data){
    res.render('index', {tacos:data});
  });
});

router.get('/new', function(req, res, next){
  res.render('new');
});

router.post('/', function(req, res, next){
  tacoBag.insert({name: req.body.name,
                  type: req.body.type,
                  size: req.body.size,
                  bean: req.body.bean
                  })
  res.redirect('/');
});

router.get('/:id', function(req, res, next){
  tacoBag.findOne({_id: req.params.id}, function(err, data){
    res.render('show', {theTaco: data});
  });
});

router.get('/:id/edit', function(req, res, next){
  tacoBag.findOne({_id: req.params.id}, function(err, data){
    res.render('edit', {theTaco: data});
  });
});

router.post('/:id/update', function(req, res, next){
  tacoBag.updateById(req.params.id,{
                  name: req.body.name,
                  type: req.body.type,
                  size: req.body.size,
                  bean: req.body.bean},
                   function(err, data){
  res.redirect('/');
});
});

router.post('/:id/delete', function(req, res,next){
  tacoBag.remove({_id: req.params.id}, function(err, data){
    res.redirect('/');
  });
});


module.exports = router;
