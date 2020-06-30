function ran(min,max){
  y = Math.floor((Math.random() * max) + min);
  return y
}

function getQuestion(){
  console.log(questions[ran(0,100)].questions)
  document.getElementById("cover").innerHTML = "<h1>" + questions[ran(0,100)].questions + "</h1>"
  document.getElementById("cover").style.backgroundImage = 'linear-gradient( 217deg, rgb('+ran(0,255)+','+ran(0,255)+','+ran(0,255) + '), rgb('+ran(0,255)+','+ran(0,255)+','+ran(0,255) + ')';
}