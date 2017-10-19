// //Ask the user "Are we there yet?"
// let question = prompt("Are we there yet?");


// //Keep asking again and again until they answer "yes" or "yeah"
// while (question !== "yes" && question !== "yeah") {
//     question = prompt("Are we there yet?");
// }

// //make an alert when they type yes or yeah
// alert("Yay! We finally made it!");




var question = prompt("are we there yet?");

while(question.indexOf("yes") === -1) {
	var question = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");

//NOTE:  when i changed var to let in this second example it did not work as expected.