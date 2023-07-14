
let scorePlayer2;
let scorePlayer1;
let award1;
var total1=0;
let total2 = 0;
let win = document.getElementById("win")
let roll1 = document.getElementById("rollPlayer1")
let tot1 = document.getElementById("total1")
let tot2 = document.getElementById("total2")
let sco1 =document.getElementById("scor1");
let sco2 =document.getElementById("scor2");
let roll2 = document.getElementById("rollPlayer2")

let image1 =document.getElementById("image1") ;
let image2 =document.getElementById("image2") ;

const stopGame = document.getElementById("hold");  
const start = document.getElementById("start");  
roll1.addEventListener("click", player1);
roll2.addEventListener("click", player2);
start.addEventListener("click",start1);
hold.addEventListener("click", stopPlayer);
image1.style.visibility ="hidden";
image2.style.visibility ="hidden";
function start1(){
    win.innerHTML  = 'START AGAIN ';
    image1.style.visibility ="hidden";
    scorePlayer1 = 0;
    total1 = 0;
    scorePlayer2 = 0;
    
    total2 = 0;
    sco1.innerHTML =` SCORE:0`
    sco2.innerHTML =` SCORE:0`
    tot1.innerHTML =` TOTAL:0` 
    tot2.innerHTML =` TOTAL:0`
}
function player1() {
  
    win.innerHTML = 'ROLL AGAIN';
    scorePlayer1 =  Math.floor(Math.random() * 6) + 1;
    image1.style.visibility ="visible";
    dice();
    sco1.innerHTML =`SCORE:${scorePlayer1}`;
    console.log(scorePlayer1);
   
    total1 += scorePlayer1;
    award1 = total1;
    //player2();
    console.log(`award1 is ${award1}`);
   tot1.innerHTML = `TOTAL: ${total1}`;


   if(scorePlayer1 < 2 && total1 < 2){
    scorePlayer1 = 0;
    total1 = 0;
    win.innerHTML = ' YOU LOOSE AND CLICK  ON START AGAIN';
   
    sco1.innerHTML =`SCORE:0`
    sco2.innerHTML =`SCORE:0`
    tot1.innerHTML =`TOTAL:0`
    tot2.innerHTML =`TOTAL:0`



   
    return award1;
   }
   
}


function player2() {
    
    win.innerHTML = 'ROLL AGAIN';
    scorePlayer2 =  Math.floor(Math.random() * 6) + 1;
    image2.style.visibility ="visible";
    dice();
    sco2.innerHTML =`SCORE:${scorePlayer2}`;
    console.log(scorePlayer2);
   
    total2 += scorePlayer2;
    console.log(total2);
   tot2.innerHTML = `TOTAL:${total2}`;


   if(scorePlayer2 < 2 && total2 < 2){
    scorePlayer2 = 0;
    total2 = 0;
    win.innerHTML = 'YOU LOOSE AND CLICK  ON START AGAIN';
   
    sco1.innerHTML =`SCORE:0`
    sco2.innerHTML =`SCORE:0`
    tot1.innerHTML =`TOTAL:0`
    tot2.innerHTML =`TOTAL:0`
    return total2;
   }
   return scorePlayer2;

   
}


function win1(){
    var award2 =award1;
 if (total1 != 0  && total2 != 0){
    console.log(`total1 is ${award2}`)
    console.log(`total2 is ${total2}`)
   
    if( sco1 != 1 && sco2 != 1   && award2 > total2 ){
    win.innerHTML = 'PLAYER1 WIN';
 }
     
 else if ( sco1 != 1 && sco2 != 1&& award2 < total2 )
 {
     win.innerHTML = 'PLAYER2 WIN';
     
 }
 else if  ( sco1 != 1 && sco2!= 1  && award2 == total2 ){
    win.innerHTML = 'It is tie';
 }
 
}
}

function stopPlayer(){
    win.innerHTML  = 'STOP ';
    image1.style.visibility ="hidden";
    image2.style.visibility ="hidden";
    var award2 =award1;
    if(award2 > total2 && total2 !=0 && sco1 != 1 && sco2!= 1 && award2 !=0){
        win.innerHTML = 'PLAYER1 WIN';
     }
         
     else if  (award2 < total2 && total2  !=0 && sco1 != 1 && sco2!= 1 && award2 !=0)
     {
         win.innerHTML = 'PlLAYER2 WINn';
         
     }
    else if  (award2 == total2  && total2 !=0 && sco1 != 1 && sco2!= 1 && award2 !=0){
        win.innerHTML = 'It is tie';
     }
   // scorePlayer1 = 0;
    //scorePlayer2 = 0;
   // total1 = 0;
   // total2 = 0;
   // sco1.innerHTML =`PLAYER1 SCORE:0`;
    //tot1.innerHTML =`PLAYER1 TOTAL:0`;
   // sco2.innerHTML =`PLAYER1 SCORE:0`;
    //tot2.innerHTML =`PLAYER1 TOTAL:0`;
}



function dice(){
    if(scorePlayer1 == 1 || scorePlayer2 == 1   ){
        image1.src = "image/one.png";
        image2.src = "image/one.png";
           }
        else  if(scorePlayer1 == 2 || scorePlayer2 == 2 ){
            image1.src = "image/two.png";
            image2.src = "image/two.png";
               }
               else    if(scorePlayer1 == 3 || scorePlayer2 == 3 ){
                image1.src = "image/three.png";
                image2.src = "image/three.png";
                   }
                   else    if(scorePlayer1 == 4 || scorePlayer2 == 4 ){
                    image1.src = "image/four.png";
                    image2.src = "image/four.png";
                       }
                       else  if(scorePlayer1 == 5 || scorePlayer2 == 5 ){
                        image1.src = "image/five.png";
                        image2.src = "image/five.png";
                           }
                           else   {
                            image1.src = "image/six.png";
                            image2.src = "image/six.png";
                               }
}
