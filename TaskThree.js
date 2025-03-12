const counter = {
  count: 1,
  step: 2,

  incrementing: function() {
    counter.count += counter.step;
  }
};



console.log(counter.count); 

counter.incrementing();
console.log(counter.count);