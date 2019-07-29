var questionTrivia = []
questionTrivia[0] = "What did you do this past weekend?";
questionTrivia[1] = "What is the last thing you do before you go to sleep?";
questionTrivia[2] = "What was the last thing you purchased?";
questionTrivia[3] = "Do you believe in love at first sight?";
questionTrivia[4] = "If you could live anywhere in the world, where would it be?";
questionTrivia[5] = "What was your worst vacation experience?";
questionTrivia[6] = "What is your favorite restaurant?";
questionTrivia[7] = "What is your most embarrassing moment?";
questionTrivia[8] = "What do your parents do for a living?";
questionTrivia[9] = "What is your favorite pizza topping?";
questionTrivia[10] = "What is the signature dish that you cook?";
questionTrivia[11] = "What was the last movie you've seen?";
questionTrivia[12] = "What is the craziest thing you've ever done?";
questionTrivia[13] = "What is your biggest regret?";
questionTrivia[14] = "Do you play video games?";
questionTrivia[15] = "Do you believe people are inherently good?";



var buttonNew = document.querySelector(".btn");

buttonNew.addEventListener("click", function(){

var random = Math.floor(Math.random()*(questionTrivia.length));

document.getElementById('paragraf').innerHTML = questionTrivia[random];

});