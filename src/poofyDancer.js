var PoofyDancer = function( top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node.removeClass();
  this.$node.addClass('poof');
  console.log(this.$node.css('bottom-border-width'));

};

PoofyDancer.prototype = new Dancer();

PoofyDancer.prototype.constructor = PoofyDancer;

PoofyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.specialMove();
};

PoofyDancer.prototype.specialMove = function () {
  var random = function(max) {
    return Math.floor(Math.random()* max);
  };

  // var colors = ["red", "blue", "yellow", "green", "mauve"];
  // var n = random(50);
  // var styles = {};
  // styles['border'] = n + "px solid " + colors[random(colors.length)];
  // styles['border-radius'] = n + "px";
  // this.$node.css(style);
};


