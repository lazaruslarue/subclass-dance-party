var TechnoDancer = function( top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
};

TechnoDancer.prototype = new Dancer();

TechnoDancer.prototype.constructor = TechnoDancer;

TechnoDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var colors = ["red", "blue", "yellow", "green", "mauve"];
  var n = Math.floor(Math.random()* colors.length);
  this.$node.css('border-color',colors[n]);
};


