
const btnStart = document.getElementById("btnStart");
const div1 = document.getElementById("d1");
const div2 = document.getElementById("d2");
let p = document.getElementById("message");
console.log (p)
let spinCounter = 0;
let var1
let var2


function startCounter() {
    if (typeof(myInterval) != "undefined") { return ; }
    myInterval=setInterval( spin , 1000);
  }

  function stopCounter() {
    p = document.getElementById("message");
    p.innerText="finito"
    console.log("finito")
    if (typeof(myInterval) == "undefined") { return ; }
    console.log("controlloStopCounter");
    clearInterval(myInterval);
    myInterval = undefined;
    
    if ( var1 == var2 )  {
        p.innerText="hai Vinto"
     } else {
        p.innerText="hai perso"
     }
  }


  function spin() {
      if (spinCounter < 4) {
        var1 = Math.random()*4;
        var2 = Math.random()*4;
        var1 = Math.trunc(var1);
        var2 = Math.trunc(var2);
        div1.innerText = var1
        div2.innerText = var2
        console.log("Var1 = " + var1);
        console.log("Var2 = " + var2);
        spinCounter++;
        if (spinCounter == 4) {
          stopCounter()
        }
    }
   
    p.innerText = spinCounter;
    console.log("controlloSpin");
}

btnStart.addEventListener( 'click' , startCounter);