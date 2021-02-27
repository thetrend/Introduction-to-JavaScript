/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
const votingAge = 19;
if (votingAge >= 18) {
  console.log(true);
} else {
  console.log(false);
}

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let a = 25;
const b = 15;
if (b === 15) {
  a = 30;
}
console.log(a);

/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

let c = "1999";
let d = Number(c);
console.log(d);

/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
    /*add your code here*/
    return a * b;
  }

console.log(multiply(5,4));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age){
    /*add your code here*/
    return age * 7;
}

console.log(dogYears(15));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){
    let multiplier;
    // If age given is less than 1 which means doggy is a puppy
    if (age < 1) {
      // if doggy's age is between 2-4 months, let food be 10% of doggy's weight
      if ((age >= (2/12))  && age <= (4/12)) {
      multiplier =  .10;
      }
      // else if doggy's age is between 4-7 months, let food be 5% of doggy's weight
      else if ((age >= (4/12))  && (age <= (7/12))) {
       multiplier =  .05;
      }
      // else all other ages under 1 year old
     multiplier =  .04;
    } else {
    // else all other cases are true: age is 1 or higher and doggy is an adult
      if (weight <= 5) {
        // if weight is up to 5 lbs
       multiplier =  .05;
      } else if (weight > 5 && weight <= 10) {
        // if weight is between 5-10 lbs
       multiplier =   .04;
      } else if (weight > 10 && weight <= 15) {
        // if weight is between 11-15 lbs
        multiplier =  .03;
      } else {
        // else weight is higher than 15
       multiplier =  .02;
      }
    }
    let food = weight * multiplier;
    return food;
  }

console.log(hungryDog(Math.random() * 101, Math.random() * 16));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function game(user, computer){
  /*
  1. Declare decision variable as an empty variable
   */
  let decision;

  /*
  2. If computer is not defined, randomize it as a round number between 0 and 3
   */
  if (!computer) {
    computer = Math.round(Math.random() * 3);
    if (computer > 0) { computer = 'rock'; }
    else if (computer > 1) { computer = 'scissors'; }
    else { computer = 'paper'; }
  }

  /*
  3a. if strings are equal, call a tie
  3b. else if the following combinations exist, the user automatically loses
  3c. else all other combinations result in winning decisions
   */
  if (user === computer) {
    decision = 'it\'s a tie';
  } else if ((computer === 'scissors' && user === 'paper') || (computer === 'paper' && user === 'rock') || (computer === 'rock' && user === 'scissors')) {
    decision = 'you lose!';
  } else {
    decision = 'you win!';
  }

  // Return decision
  return decision;
}

console.log(game('paper'));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(km){
  /*
  Per Google 1 km = 0.621371 miles
   */
  let miles = km * 0.621371;
  return miles;
}

// Return a random calculation where km < 11
console.log(miles(Math.random() * 11));

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm){
  /*
  Per Google 1 ft = 30.48 cm
   */
  let feet = cm / 30.48;
  return feet; 
}

// return a random calucation where cm < 300
console.log(feet(Math.random() * 301));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(start){
  /*
  1. Declare i so we can modify i and leave start as immutable value
  2. Set i to be greater than 0 so it stops at 0
  3. Finally let i decrement until it gets to the set value of 0
  4. Return the requested string
   */
  for (let i = start; i > 0; i--) {
    return `${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`;
  }
}

// return the annoying song function where start is a random value between 0 and 10
console.log(annoyingSong(Math.round(Math.random() * 11)));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(score){
  /*
  1. Declare letter as an empty variable
  2. Check the value of score and assign its respective letter
   */
  let letter;
  if (score < 60) {
    letter = 'F';
  } else if (score >= 60 && score < 70) {
    letter = 'D';
  } else if (score >= 70 && score < 80) {
    letter = 'C';
  } else if (score >= 80 && score < 90) {
    letter = 'B';
  } else {
    letter = 'A';
  }

  /*
  3. Declare prefix as an empty variable
  4. If letter is an A or F, assign prefix as "an"
  5. Else prefix should be "a"
   */
  let prefix;
  if (letter === 'A' || letter === 'F') {
    prefix = 'an';
  } else {
    prefix = 'a';
  }

  /*
  6. Create result variable and return it
   */
  let result = 'you got ' + prefix + ' ' + letter;
  return result;
 }

 console.log(grade(Math.random() * 101));

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
