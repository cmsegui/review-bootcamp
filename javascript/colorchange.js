let button = document.querySelector("button");
// let isPink = false;

// button.addEventListener("click", function() {
//     if (isPink) {
//       document.body.style.background = "white";
//       isPink = false;
//     } else {
//       document.body.style.background = "pink";
//       isPink = true;
//     }
    
// });

//*******OR WE CAN TOGGLE THE COLOR USING A DIFFERENT WAY*******/

button.addEventListener("click", function() {
    document.body.classList.toggle("pink");
})