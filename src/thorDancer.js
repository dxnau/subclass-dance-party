var ThorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<iframe src="https://giphy.com/embed/W1r24MlBOY6grcgCeE" class="dancer thor"></iframe>');
  this.$node = $('<span class="dancer thor"><img href="https://static.wikia.nocookie.net/disney/images/3/3c/Thor_Odinson_-_Profile.png/revision/latest/scale-to-width-down/1000?cb=20220513113709" alt="link not working"></span>');
  // <iframe src="https://giphy.com/embed/W1r24MlBOY6grcgCeE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/W1r24MlBOY6grcgCeE">via GIPHY</a></p>
};

ThorDancer.prototype = Object.create(Dancer.prototype);
ThorDancer.prototype.constructor = ThorDancer;

// ThorDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };