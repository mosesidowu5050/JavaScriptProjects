const car = {
      make: 'Toyota',
      model: 'Camry',
      year: 2021
};



const objectProperties = function(cars){
    for (let objects in cars){
     console.log(objects,":", cars[objects])
   }
 }


objectProperties(car);

