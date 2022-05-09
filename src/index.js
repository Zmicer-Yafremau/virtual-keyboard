import "./styles.scss";

document.body.innerHTML = `
<div class="wrapper">
  <h1>Virtual Keyboard</h1>
  <textarea readonly></textarea>

  <div class="keyboard">
    <div class="row">
      <div class="key">\`</div>
      <div class="key">1</div>
      <div class="key">2</div>
      <div class="key">3</div>
      <div class="key">4</div>
      <div class="key">5</div>
      <div class="key">6</div>
      <div class="key">7</div>
      <div class="key">8</div>
      <div class="key">9</div>
      <div class="key">0</div>
      <div class="key">-</div>
      <div class="key">=</div>
      <div class="key_active backspace">BACKSPACE</div>
      
   </div>
        <div class="row">     
      
<div class="key_active tab">TAB</div>
      <div class="key">q</div> 
      <div class="key">w</div>
      <div class="key">e</div>
      <div class="key">r</div>
      <div class="key">t</div>
      <div class="key">y</div>
      <div class="key">u</div>
      <div class="key">i</div>
      <div class="key">o</div>
      <div class="key">p</div>
      <div class="key">[</div>  
      <div class="key">]</div>
      <div class="key slash">\\</div>
      <div class="key_active">DEL</div>

 
   </div>  
      
       <div class="row">
      <div class="key_active caps">CAPS LOCK</div> 
      <div class="key">a</div>
      <div class="key">s</div>
      <div class="key">d</div>
      <div class="key">f</div>
      <div class="key">g</div>
      <div class="key">h</div>
      <div class="key">j</div>
      <div class="key">k</div>
      <div class="key">l</div>
      <div class="key">;</div>  
      <div class="key">'</div>
      <div class="key_active enter">ENTER</div>
   </div>  
      
         <div class="row">
      <div class="key_active shift">SHIFT</div> 
      <div class="key">z</div>
      <div class="key">x</div>
      <div class="key">c</div>
      <div class="key">v</div>
      <div class="key">b</div>
      <div class="key">n</div>
      <div class="key">m</div>
      <div class="key">,</div>
      <div class="key">.</div>
      <div class="key">/</div>  
      <div class="key up">↑</div>
      <div class="key_active shift">SHIFT</div>
   </div>  

        <div class='row'>
      <div class="key_active ctr">CTR</div> 
      <div class="key_active">LIN</div>
      <div class="key_active">ALT</div>
      <div class="key space"></div>
      <div class="key_active">ALT</div>
      <div class="key left">←</div>
      <div class="key down">↓</div>
      <div class="key right">→</div>
      <div class="key_active">CTR</div>
      
   </div>  
    <div class='os'> Produced in Ubuntu OS</div>
  <div>
        
      `;
let lockSwitch = 1;
const TAB = document.querySelector(".tab");
let text = document.querySelector("textarea");
let key = document.querySelectorAll(".key");
let capsLock = document.querySelector(".caps");
let space = document.querySelector(".space");
let enter = document.querySelector(".enter");
let backspace = document.querySelector(".backspace");
key.forEach( value => value.addEventListener( "click", () => text.innerHTML += value.innerHTML ) );


document.addEventListener("keydown", function(event) {
  key.forEach( value =>{ 
  
    if (event.code == ("Key"+value.innerHTML.toUpperCase() ) ) {
       if (lockSwitch === 1) text.innerHTML += event.code[event.code.length-1].toLowerCase();

    else if (lockSwitch === 0) text.innerHTML += event.code[event.code.length-1];
    blink(value);
  }
    
       if (event.code == ("Digit"+value.innerHTML) ) {
   
    text.innerHTML += event.code[event.code.length-1];
    blink(value);
  }
    
  });
  
  
});

function caps(){
  if ( lockSwitch === 0 ) {
    key.forEach( value => value.innerHTML = value.innerHTML.toLowerCase() );
    lockSwitch =1;
    capsLock.style.backgroundColor = "";
}
    
  else if ( lockSwitch === 1 )  {
    key.forEach( value => value.innerHTML = value.innerHTML.toUpperCase() );
    lockSwitch =0;
     capsLock.style.backgroundColor = "grey";
    
    }     
}

function blink(val){
  val.style.backgroundColor = "grey";
    setTimeout( () => val.style.backgroundColor = "", 100 );
}


document.addEventListener("keydown", function(e) {
  
  if ( e.code == "Tab" 
      || e.code == "Space"
      || e.code == "ArrowUp"
      || e.code == "ArrowDown"
      || e.code == "ArrowLeft"
      || e.code == "ArrowRight"
     ) { e.preventDefault(); }
}, false);


document.addEventListener( "keydown", 
                          (event) => { 
    if ( event.code == "CapsLock" ) {
    caps();

  }
  
    if ( event.code == "Space" ) {
  text.innerHTML += " ";
  blink(space);
  }
  
     if ( event.code == "Enter" ) {
  text.innerHTML += "\n";
blink(enter);
  }
  
  
     if ( event.code == "Backspace" ) {
  text.innerHTML = text.innerHTML.slice(0,-1);
     blink(backspace);
  }
  
       if ( event.code == "Tab" ) {
    
   text.innerHTML += "  ";
  blink(TAB);
  }
  
        if ( event.code.match(/Arrow/) ) {
  
text.innerHTML += document.querySelector("." + event.code.slice(5).toLowerCase() ).innerHTML;
  blink( document.querySelector("." + event.code.slice(5).toLowerCase() ) );
  }
  
}
   );
capsLock.addEventListener( "click", caps );
space.addEventListener( "click", () => text.innerHTML += " " );
enter.addEventListener( "click", () => text.innerHTML += "\n" );
backspace.addEventListener( "click", () => {text.innerHTML = text.innerHTML.slice(0,-1);
    } );
TAB.addEventListener( "click", () => text.innerHTML += "  " );

