setTimeout(function()
{
const daseriQanak=prompt("How many classes you have?") ;
const dasajam=prompt("How long is each class in minutes?");
const yndmijum=prompt("How long is the break between classes in minutes");
const gumar=daseriQanak*dasajam+(daseriQanak-1)*yndmijum;
console.log("You will stay at the university "+gumar+ " minutes");
},1000);