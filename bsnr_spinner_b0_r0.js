document.getElementById("bsnr_spinner_b0_r0").innerHTML='

<div  id="spinner"  class="spinner-border text-primary position-fixed bottom-0 right-0" role="status">   <span class="visually-hidden">Loading...</span> </div> ';


/* funzione per lo spinner */
   function attesa(){
   if (document.all){}
   else if (document.getElementById){
   document.getElementById("spinner").style.visibility="hidden";
   }
   
   }


