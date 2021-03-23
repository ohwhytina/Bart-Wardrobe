const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Reply } = require('../models');
const axios = require('axios')
var APIkey = "d32377506e56284db17e72a06db9c9d8";

// const weather = require('././utils/helpers');

// get all posts for homepage

router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'content',
      'created_at'
    ],
    include: [
      {
        model: Reply,
        attributes: ['id', 'reply_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
          const posts = dbPostData.map(post => post.get({ plain: true }));

          
          var apiBartStationUrl = "http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y";
          axios(apiBartStationUrl)
      .then (bart => {
        
        var array = [];
        array = new Array();
          for (i = 0; i < array.length; i++) {
            array[i] = i;
          }


        var apiWeather = "https://api.openweathermap.org/data/2.5/weather?zip=" + bart.data.root.stations.station[i].zipcode + ",us&appid=" + APIkey + "&units=imperial";
        axios(apiWeather)

          .then (weth => {
            console.log(bart.data.root.stations.station[i].name)
            console.log(weth.data.main.temp);

            res.render('homepage', {
              posts,
              loggedIn: req.session.loggedIn,
              bartname: bart.data.root.stations.station[i].name,
              weathername: weth.data.main.temp
            });
          })
        });
      }) 
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post

router.get('/post/:id', (req, res) => {
Post.findOne({
where: {
  id: req.params.id
},
attributes: [
  'id',
  'title',
  'content',
  'created_at'
],
include: [
  {
    model: Reply,
    attributes: ['id', 'reply_text', 'post_id', 'user_id', 'created_at'],
    include: {
      model: User,
      attributes: ['username']
    }
  },
  {
    model: User,
    attributes: ['username']
  }
]
})
.then(dbPostData => {
  if (!dbPostData) {
    res.status(404).json({ message: 'No post found with this id' });
    return;
  }

  const post = dbPostData.get({ plain: true });

  res.render('single-post', {
    post,
    loggedIn: req.session.loggedIn
  });
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});




router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
    router.get('/signup', (req, res) => {
      if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      
      res.render('signup');
    });
    
    // router.get('/weather', (req, res) => {
    //   if (!req.query.address) {
    //       return res.send({
    //           error: 'You must provide an address!'
    //       })
    //   }
    // });

    module.exports = router;