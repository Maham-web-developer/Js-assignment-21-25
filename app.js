// ========== Chapter 21-25======
// Qusetion 1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + " Welcome!");

// Question 2
// var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhoneModel.length;

// document.write("My Favorite phone is: " + inputLength);

// Question 3
// var word = "pakistani";
// var index = word.indexOf("n");

// document.write('String:Pakistani  "+ "<br>"+"index of n :" + index);

// Question 4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.write("The last index of "l" in the word 'Hello World' is: " + lastIndex);

// Question 5
// var word = "Pakistani";
// var character = word.charAt(3);

// document.write("Pakistani is : " + character);

// Question 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Welcome!");

// Question 7
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");

// document.write("City : " + word + "<br>");
// document.write("After replacement : " + newWord);

//Question 8


// Question 9
// var inputString = "472";
// var convertedNumber = Number(inputString);
// var outputText = "Value : " + inputString + "<br>";

// outputText += "Type : " + typeof inputString + "<br>";
// outputText += " value : " + convertedNumber + "<br>";
// outputText += "Type : " + typeof convertedNumber;

// document.getElementById("output").innerHTML = outputText;

// Question 10
// var userInput = prompt("Enter your text:");
// var convertedText = userInput.toUpperCase();
// var outputText = "User input: " + userInput + "<br>";
// outputText += "Upper Case: " + convertedText;

// document.getElementById("output").innerHTML = outputText;

// Question 11
// var userInput = prompt("Enter your text:");
// var words = userInput.toLowerCase().split(" ");

// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// var convertedText = words.join(" ");
// var outputText = "User input: " + userInput + "<br>";
// outputText += "Title Case: " + convertedText;

// document.getElementById("output").innerHTML = outputText;

// question 12
// var num = 35.36;
// var numString = num.toString();
// var convertedString = numString.replace(".", "");
// var outputText = "Number : " + num + "<br>";
// outputText += "Result : " + convertedString;

// document.getElementById("output").innerHTML = outputText;

// Question 13
// var username = prompt("Enter your username:");
// var isValid = true;
// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Please enter a valid username");
// } else {
//     alert("Username is valid: " + username);
// }

// Question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Wellcome to sweet bakery. what do you want to order sir / ma'am");

// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("cookie is available in our bakery");
// } else {
//     alert("We are sorry. chips is not available");
// }

// Question 15
// var password = prompt("Enter your password:");

// var containsAlphabet = /[a-zA-Z]/.test(password);
// var containsNumber = /\d/.test(password);
// var startsWithNumber = /^\d/.test(password);
// var isLengthValid = password.length >= 6;

// if (containsAlphabet && containsNumber  ) {
//     alert("Entered passward:");
// } 
// else if (!startsWithNumber && isLengthValid) {
//     alert("passward can not begin with a number.")
// } 
// else {     
//     alert("Please enter a valid password.");
//  }

// Question 16
// var university = "University of Karachi";
// var array = university.split(" ");

// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>");
// }

// Question 17
// var userInput = prompt("Enter any thing");
// var updated = userInput.charAt(userInput.length -1);
// document.write("User Input: " + userInput + "<br>" + "Last Character of Input: " + updated)

// Question 18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var sentenceLower = sentence.toLowerCase();
// var words = sentenceLower.split(" ");

// var count = 0;
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === wordToCount) {
//     count++;
//   }
// }
// console.log(sentence,"There are 2 occurrence(s) of world 'the'");





