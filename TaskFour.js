const person = {
		firstName: "John",
		lastName: "Doe"
	};



const returningTheFullName = function(person){

let fullName = person.firstName +" "+ person.lastName
   return fullName;
}

let fullName = returningTheFullName(person);
console.log(fullName)
