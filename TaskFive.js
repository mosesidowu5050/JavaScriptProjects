const person = {
		firstName: "John",
		lastName: "Doe",
		age: 25
	};

const returningPersonDetails = function(person){

let formatDetails = `"First Name: ${person.firstName}, Last Name: ${person.lastName}, Age: ${person.age}"`

   return formatDetails;

}

let formatDetails = returningPersonDetails(person);
console.log(formatDetails)
