var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var stories = db.get('stories');
var opinions = db.get('opinions')


router.get('/stories', function(req, res, next){
  stories.find({}, function(err, data){
    res.json(data);
  });
});


router.get('/opinions', function(req, res, next){
  opinions.find({}, function(err, data){
    res.json(data);
  });
});
 


router.post('/addStory', function(req, res, next){
  stories.insert({story: req.body.story,
                  link: req.body.link,
                  url: req.body.url,
                  text: req.body.text
                  })
  res.redirect('/');
});

router.post('/opinion', function(req, res, next){
  opinions.insert({opinion: req.body.opinion,
                  story_id: req.body.id
                  })
  res.redirect('/');
});

router.get('/:id', function(req, res, next){
  stories.findOne({_id: req.params.id}, function(err, data){
    res.json(data);
  });
});




router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  })
});

module.exports = router;
