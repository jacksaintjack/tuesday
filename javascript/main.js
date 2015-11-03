// View for play page
var playView = Backbone.View.extend({
  tagName: 'section',
  className: 'playArea',
  template: _.template($('#playTemplate').html()),

  render: function(){
    this.$el.html(this.template());
  }
});

// View for play page
var highscoreView = Backbone.View.extend({
  tagName: 'section',
  className: 'highscoreArea',
  template: _.template($('#scoreTemplate').html()),

  render: function(){
    this.$el.html(this.template());
  }
});

//View for Settings
var settingsView = Backbone.View.extend({
  tagName: 'section',
  className: 'settingArea',
  template: _.template($('#settingTemplate').html()),

  render: function(){
    this.$el.html(this.template());
  }
});

//Router
var gameRouter = Backbone.Router.extend({

  routes: {
    "": "menu",
    "play": "play",
    "highscores": "highscores",
    "settings": "settings"
  },
//Trying it in the Router 
  menu:function(){
    $('#screen').html('');
    $('#screen').append('<span class="loading">  Loading... </span>');
    $('#screen').append
    ('<section id="menu"><a href="#/play" id="play"> Play </a> <a href="#/highscores" id="score"> High Score </a> <a href="#/settings" id="settings"> Settings </button></section>')
    setTimeout(function(){
      $(".loading").css('display', 'none')
      $("#menu").css({'display': 'block', 'padding-top': '10em'})
    }, 4000);
},
//Below use the view method
  play: function() {
    var view = new playView();
    view.render();
    $('#screen').html(view.$el);
  },

  highscores: function(){
    var highView = new highscoreView();
    highView.render();
    $('#screen').html(highView.$el);
  },

  settings: function(){
    var settingView = new settingsView()
    settingView.render();
    $('#screen').html(settingView.$el);
  }



});

var router = new gameRouter();
Backbone.history.start();
