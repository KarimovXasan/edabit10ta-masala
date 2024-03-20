// https://edabit.com/challenge/Z5nLWN9XscsuRi2oT 1 masalani ssilkasi
//1.Triangle and Parallelogram Area Finder
//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

// areaShape(2, 3, "triangle") ➞ 3

// areaShape(8, 6, "parallelogram") ➞ 48

// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77

//function areaShape(base,height,shape) {
    // if(shape==="triangle"){
	// 	return base*height*0.5
	// }else if(shape==="parallelogram"){
	// 		return base*height
	// 	}
//}

//https://edabit.com/challenge/ghkYG7dnSKd5NWoyt 2 masalani ssilkasi
//2.Word Numbers!
//Create a function that returns a number, based on the string provided. Here is a list of all digits:

//
// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0

//word("one") ➞ 1

// word("two") ➞ 2

// word("nine") ➞ 9

//function word(s) {
// let obj=  { "one" :	1,
// "two":	2,
// "three":	3,
// "four":	4,
// "five":	5,
// "six":	6,
// "seven":	7,
// "eight":	8,
// "nine":	9,
// "zero":	0 };
	
// 	return obj[s];
// }

//https://edabit.com/challenge/gNMo9HagBZpWyAoNS 3
//3.Minimal II: Boolean Redundancy
//Check the principles of minimalist code in the intro to the first challenge.

// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.

// Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.

// //let bool = Boolean(x < 4)
// return bool === true

//return x < 4

//function parity(n) {
// 	return n % 2 === 0 ? 'even' : 'odd';
// }

// https://edabit.com/challenge/iiSAic33n4wGufQmG 4 
//4.Is the Last Character an "N"?
//Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
// Examples

// isLastCharacterN("Aiden") ➞ true

// isLastCharacterN("Piet") ➞ false

// isLastCharacterN("Bert") ➞ false

// isLastCharacterN("Dean") ➞ true

// function isLastCharacterN(word) {
// 	return word.substr(-1) == "n";
// }

//https://edabit.com/challenge/j3aeuun5WDXFsTYAK 5
//5.Minimal VI: Ternary Operator
//In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

//https://edabit.com/challenge/Ac8GiJBAzEJYmcqyF 6
//6.Luke, I Am Your ...
//Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

//relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."

// function relationToLuke(name) {
// 	const rels = {
// 		"Darth Vader": "father",
// 		"Leia": "sister",
// 		"Han": "brother in law",
// 		"R2D2": "droid"
// 	}
// 	return `Luke I am your ${rels[name]}.`
// }

//https://edabit.com/challenge/2tGbjoawAoP5rKGjy 7
//Front 3 - Slice Check Repeat Concatenate

// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

//frontThree("Python") ➞ "PytPytPyt"

// frontThree("Cucumber") ➞ "CucCucCuc"

// frontThree("bioshock") ➞ "biobiobio"

//function frontThree(txt){
// 	return txt.slice(0,3).repeat(3)
// }	

//https://edabit.com/challenge/5vAX6Lw2Yrgdkx7Qi 8

//Is the Word Singular or Plural?
//Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".\

// isPlural("changes") ➞ true

// isPlural("change") ➞ false

// isPlural("dudes") ➞ true

// isPlural("magic") ➞ false

//const isPlural = word => word.endsWith('s');

//https://edabit.com/challenge/DBC7uCaN3yA4uGFQN 9
//Repeat String
//Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// repeatString("Mubashir", 2) ➞ "MubashirMubashir"

// repeatString("Matt", 3) ➞ "MattMattMatt"

// repeatString(1990, 7) ➞ "Not A String !!"

//function repeatString(txt, n){
// if(typeof(txt) === string){
//     return txt.repeat(n);
//   }
//   return Not A String !!;
// }
