// Write your JavaScript code here!



var planets = [
    ['Pluto', 0.06,"https://giphy.com/search/pluto-flyby"],
    ['Neptune', 1.148,"https://78.media.tumblr.com/01c51f2eaabba93ba7c773fd8d24267d/tumblr_n1o0zagcww1rnq3cto2_r1_500.gif"],
    ['Uranus', 0.917,'https://78.media.tumblr.com/37836b22b206641e1b53ebf20eba54c8/tumblr_n1nz70G0pB1rnq3cto1_r1_500.gif'],
    ['Saturn', 1.139,"https://78.media.tumblr.com/775cf7aecb29b98c0c926387b4100f84/tumblr_n1jr6o1Fvd1rnq3cto1_500.gif"],
    ['Jupiter', 2.640,"https://78.media.tumblr.com/4414e170e0f1be56ab3540d9c72fd11b/tumblr_n1kolkuYlC1rnq3cto1_500.gif"],
    ['Mars', 0.3895,'https://78.media.tumblr.com/f0c9cbd38e887feb8e043db231357362/tumblr_n1jsnike6M1rnq3cto2_r1_540.gif'],
    ['Moon', 0.1655,'https://giphy.com/gifs/NtDBzumKRZz1e/html5'],
    ['Earth', 1,'https://78.media.tumblr.com/8406a555d2fb4e9e3001bf6883d7a036/tumblr_n1hx3tPUNy1rnq3cto1_r1_500.gif'],
    ['Venus', 0.9032,'https://78.media.tumblr.com/8275c5ffffec2e8bfc52e86585b8e75b/tumblr_n1f21tpf5L1rnq3cto2_r1_500.gif'],
    ['Mercury', 0.377,'https://78.media.tumblr.com/9dd56b358d13c8a1322223b6f050c679/tumblr_n1f5th57xd1rnq3cto1_r1_540.gif'],
    ['Sun', 27.9,"https://78.media.tumblr.com/e3c4a4b99d9cb64423d5aaf43d5d9cdb/tumblr_n1g3a8pHui1rnq3cto1_540.gif"]
  ];


//---------------------------------------------------------------------------------------
//   LOOPS (THIS IS HOW TO WRITE THE "FOR EACH LOOP" FUNCTION IN ES6 for .forEach())
//----------------------------------------------------------------------------------------

planets.reverse().forEach((planet,index) => {
   var option = document.createElement("option");// Create a variable called option to make the element.Then use the function (document.createElement) that is asking what element do you want to create.The function needs direction. Use parentheses to give it one. In this case it's ("option") The quotes mean its a string.
   option.value = planet[0];// now, what is the value of your element? Use the .value to say that option is equal to the value of the [var planets] contents. In this case, it's a array. So the .forEach function is now looping through the entire list.But becasue you've typed "planet[0]" into the parameters of the ".forEach ()" you're telling it to go to the first item in the indexed array. In this case "Pluto"
   option.innerText = planet[0];//then use the .innerText to insert the results into the element called "object."
   //document.body.appendChild(p); is from the MDN web docs. To use it in this case it would look like the following:
   document.getElementById('planets').appendChild(option);//this means go find the element of option's ID. In this case, the ID is found on the Index.HTML. In this case, it is  "planets". But now you've put a loop on "planets" and created an option element. And now after it finds the first item, APPEND means "add another" or go to the next one and print it on the selector ID dropdown. 
});// don't forget to close your function with a curly brace,then the closed parentheses, and then the semi-colon which means "Hey Fuck-Face I'm DONE!"
//NOTE TO AOOVE-----> TO REVERSE AN ARRAY, simply add .reverse() to planets.forEach. It's already added.
 
//-------------------------------------------------------------
//  OTHER FUNCTIONS
//--------------------------------------------------------------


function calculateWeight(weight, planetName) {
     //go through planets arrayl
    var result = '';
    planets.forEach(function(banana) {
        if (banana[0] === planetName) {
            result = weight * banana[1];
            document.getElementById('image').innerHTML =  '<img alt="mercury" src="' + banana[2] + '"/>';
        } 
    });

    return result;
        //if planetName === planet[0] then weight * planet[1]
}






  function handleClickEvent() {

    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById('user-weight').value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = document.getElementById('planets').value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
    document.getElementById("output").innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
    alert(`If you were on ${planetName}, you would weigh ${result}lbs!`)
  };

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

document.getElementById('calculate-button').addEventListener('click', handleClickEvent);