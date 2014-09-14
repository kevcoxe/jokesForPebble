/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Jokes',
  icon: 'images/menu_icon.png',
  body: 'Press a button for a Joke!'
});

main.show();

main.on('click', 'up', function(e) {
  
   var req = new XMLHttpRequest();
  req.open('GET', "http://box2.minhazm.com/chatbot/conversation_start.php?say=%27tell%20me%20a%20joke%27", true);
  req.onload = function(e) {
    if (req.readyState == 4 && req.status == 200) {
      if(req.status == 200) {
        var response = JSON.parse(req.responseText);
          var bot;
          if (response.Message) {
            // the markitondemand API sends a response with a Message
            // field when the symbol is not found
            Pebble.sendAppMessage({
              "bot": "Not Found"});
          }
          if (response) {
            // data found, look for LastPrice
            bot = response.botsay;
            console.log(bot);
            card.body(bot);
          }
      } else { console.log("Error"); }
    }
  };
  req.send(null);
	
  
  var card = new UI.Card();
  //card.title('A Card');
  //card.subtitle('Is a Window');
  //card.body('The simplest window type in Pebble.js.');
  card.show();
});

main.on('click', 'select', function(e) {
  
   var req = new XMLHttpRequest();
  req.open('GET', "http://box2.minhazm.com/chatbot/conversation_start.php?say=%27tell%20me%20a%20joke%27", true);
  req.onload = function(e) {
    if (req.readyState == 4 && req.status == 200) {
      if(req.status == 200) {
        var response = JSON.parse(req.responseText);
          var bot;
          if (response.Message) {
            // the markitondemand API sends a response with a Message
            // field when the symbol is not found
            Pebble.sendAppMessage({
              "bot": "Not Found"});
          }
          if (response) {
            // data found, look for LastPrice
            bot = response.botsay;
            console.log(bot);
            card.body(bot);
          }
      } else { console.log("Error"); }
    }
  };
  req.send(null);
	
  
  var card = new UI.Card();
  //card.title('A Card');
  //card.subtitle('Is a Window');
  //card.body('The simplest window type in Pebble.js.');
  card.show();
});

main.on('click', 'down', function(e) {
  
   var req = new XMLHttpRequest();
  req.open('GET', "http://box2.minhazm.com/chatbot/conversation_start.php?say=%27tell%20me%20a%20joke%27", true);
  req.onload = function(e) {
    if (req.readyState == 4 && req.status == 200) {
      if(req.status == 200) {
        var response = JSON.parse(req.responseText);
          var bot;
          if (response.Message) {
            // the markitondemand API sends a response with a Message
            // field when the symbol is not found
            Pebble.sendAppMessage({
              "bot": "Not Found"});
          }
          if (response) {
            // data found, look for LastPrice
            bot = response.botsay;
            console.log(bot);
            card.body(bot);
          }
      } else { console.log("Error"); }
    }
  };
  req.send(null);
	
  
  var card = new UI.Card();
  //card.title('A Card');
  //card.subtitle('Is a Window');
  //card.body('The simplest window type in Pebble.js.');
  card.show();
});
