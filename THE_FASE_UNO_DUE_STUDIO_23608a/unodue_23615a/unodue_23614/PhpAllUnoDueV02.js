<script>



/*

$0500a



TheRollingThunderProject released THE_APPHP_UNO_DUE_23612_0900a_PhpAllUnoDueV02

*/





DESKTOP_CHECK = 1 ;
DESKTOP_CHECK = 0 ;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{ DESKTOP_CHECK = 0 ; } else { DESKTOP_CHECK = 1 ; }

/*
if(DESKTOP_CHECK === 0){
alert("mobile");}
if(DESKTOP_CHECK === 1){
alert("desktop");}
*/

/* mobile first */
FontSizeStandard__=2.25;
FontSizeStandard__=2.25*1.00;
FontSizeStandard__=3.95*1.00;


if(DESKTOP_CHECK === 1){

FontSizeStandard__=3.95*0.50;
FontSizeStandard__=3.95*1.00;
FontSizeStandard__=3.95*0.75;

}

// rilevazione width height
// i valori possono variare
// a seconda del tipo di
// dispositivo
// 
function LarghezzaRem__(){let Larghezza__=window.innerWidth/16;return Larghezza__;}
function AltezzaRem__(){let Altezza__=window.innerHeight/16;return Altezza__;}

Larghezza__=LarghezzaRem__();
Altezza__=AltezzaRem__();






HeightHeader__=10;
HeightHeader__=15;
HeightHeader__=(FontSizeStandard__*6.125);


if(DESKTOP_CHECK === 1){
HeightHeader__=(HeightHeader__*0.75);
}







FattMargin__=1;FattPadding__=1;

MarginHeaderTop__=0;MarginHeaderRight__=0;MarginHeaderBottom__=0;MarginHeaderLeft__=0;
PaddingHeaderTop__=0;PaddingHeaderRight__=0;PaddingHeaderBottom__=0;PaddingHeaderLeft__=0;
HeightHeader__=HeightHeader__+(MarginHeaderTop__ * FattMargin__)+(MarginHeaderBottom__ * FattMargin__)+(PaddingHeaderTop__ * FattPadding__)+(PaddingHeaderBottom__ * FattPadding__);

FonteDinamica__=2.5;



FonteSizeXChiudiHeader__=(FontSizeStandard__*1);
FonteSizeXApriHeader__= (FonteSizeXChiudiHeader__*1);


FonteSizeXQuestionMarkPopUp__=FonteSizeXChiudiHeader__;
LarghezzaXQuestionMarkPopUp__=(Larghezza__*1)-(FonteSizeXChiudiHeader__*6);

AltezzaXQuestionMarkPopUp__=(Altezza__*1.00)-(HeightHeader__*0.50);
AltezzaXQuestionMarkPopUp__=(Altezza__*1.00)-(HeightHeader__*0.75);
AltezzaXQuestionMarkPopUp__=(Altezza__*1.00)-(HeightHeader__*0.95);
AltezzaXQuestionMarkPopUp__=(Altezza__*1.00)-(HeightHeader__*1.00);





 

document.getElementById("APP_UNO_DUE__").innerHTML=
`


<style>

html * {font-size:auto;font-family:monospace;}


body{border:dotted 0.15rem rgba(255,0,0,0.0);}


q{border-bottom:dashed 0.15rem orange;}


ol { list-style: none; counter-reset: ColoreCounter__;}
ol li { counter-increment: ColoreCounter__;}
ol li::before { content: counter(ColoreCounter__) ". "; background-color:aqua;color: black;font-size:75%;border:solid 0.15rem aqua;border-radius: 100%;display:inline-block;}


</style>


<style>
.spinmincaveat0{font-size:initial;}
.spinmincaveat1{background-color:white;color:gray;font-size:initial;}
.spinmincaveat2{background-color:white;color:gray;font-size:initial;}

</style>



<style>
/* UTILITIES ini */
@keyframes spin{ 0%{transform:rotate(0deg);} 100% {transform:rotate(360deg);}}

.spinner{width:48px;height:48px; width:2rem;height:2rem; border:solid 4px red; border:solid 0.25rem red; border:solid 0.25rem red; border:solid 0.25rem red; border-top:solid 4px black; border-top:solid 0.25rem transparent; background-color:transparent; border-radius:50%; overflow:none; animation: spin 1.5s linear infinite;}
.spinmin
{
width: 1.00rem;
height:1.00rem; 
border:solid 0.175rem orange; 
border-top:solid 0.175rem transparent; 
background-color:transparent; 
border-radius:50%; 
display:inline-block;
animation: spin 1.5s linear infinite;
}





@-webkit-keyframes blink {
 0% {background: #222}
 50% {background: lime}
 100% {background: #222}
}

.cursore {
 background: lime;
 line-height: 17px;
 margin-left: 3px;
 -webkit-animation: blink 0.8s infinite;
 width: 7px;
 height: 15px;
}

/* UTILITIES fin */ 

</style>





<section id="NAV_INTERNA__">


<article id="NAV_INTERNA_TOP__">
<a href="#">&#47;&#92;</a>
<a href="#fine__">&#92;&#47;</a>

</article>

</section>
<button id="NASCONDI_NAVIGAZIONE_INTERNA__" onclick="NascondiNavigazioneInterna()">-</button>
<button id="VEDI_NAVIGAZIONE_INTERNA__" onclick="VediNavigazioneInterna()">+</button>

<section>
<button id="APRI_HEADER__" onclick="ApriHeader()" >X</button>

</section>


<header id="HEADER__">
<div class="spinmin">&nbsp;</div><q class="spinmincaveat1">Loading elemento ...</q><q class="spinmincaveat2">HEADER__</q> 
</header>



<section id="SETTAGGI__"></section>
<div id="COLORE_RANDOM__"></div>


<main id="MAIN__"><div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... MAIN__</q></main>



`;


// script

document.getElementById("HEADER__").innerHTML=
`
<style>
#HEADER__{
position:fixed;top:0rem;left:0rem;

background-color:rgb(197,212,191);
background-color:rgb(254,212,191); 
background-color:#fab97b; 
background-color:#cdd58c; 
background-color:#71ea3b; 
background-color:#dfc1ed; 
background-color:#E3D353;
background-color:#E5D2FC;

color:black;

width:100%;
height:`+(HeightHeader__ * 1)+`rem;


border:solid 0.00rem red;
border-top-left-radius:0.0rem;
border-top-right-radius:0.0rem;
border-bottom-left-radius:0.0rem;
border-bottom-right-radius:0.0rem;

overflow:auto;

z-index:1000000000!important;


}



#CHIUDI_HEADER__{
position:absolute;top:0rem;right:0rem;text-align:right;font-size:`+(FontSizeStandard__*1.00)+`rem;border-radius:0.5rem;
cursor:pointer;opacity:0.75;
}

#APRI_HEADER__{
position:absolute;top:0rem;right:0rem;text-align:right;font-size:`+(FontSizeStandard__*1)+`rem;border-radius:0.5rem;
cursor:pointer;opacity:0.75;
}
#CHIUDI_HEADER__{background-color:red;color:white;}
#APRI_HEADER__{background-color:green;color:white;text-decoration:line-through;z-index:1000000000!important;}




#CONTENITORE_COPY_SI_NO__{
position:absolute;top:33.33%;right:0.00rem; 
padding-right:0rem;text-align:right;border:solid 0.00rem navy;
display:inline-block;
opacity:0.50;
}

#COPY_SI__{font-size:`+(FontSizeStandard__*1.00)+`rem;border-radius:0.50rem;cursor:pointer;display:block;}
#COPY_NO__{font-size:`+(FontSizeStandard__*1.00)+`rem;border-radius:0.50rem;cursor:pointer;display:none;}
#COPY_SI__{background-color:green;color:white!important;}
#COPY_NO__{background-color:red;color:white!important;text-decoration:line-through;}





#QUESTION_MARK_POPUP__{
position:absolute;top:66.66%;right:0rem;text-align:right;
font-size:`+(FontSizeStandard__*1)+`rem;
border-radius:0.5rem;cursor:pointer;opacity:0.75;
}
#ALT_QUESTION_MARK_POPUP__{
position:absolute;top:66.66%;right:0rem;text-align:right;
font-size:`+(FontSizeStandard__*1)+`rem;
border-radius:0.5rem;cursor:pointer;opacity:0.75;
}
#QUESTION_MARK_POPUP__{background-color:teal;color:white;}
#ALT_QUESTION_MARK_POPUP__{background-color:purple;color:white;}





</style>

<button id="CHIUDI_HEADER__" onclick="ChiudiHeader()" >X</button> 

<article id="CONTENITORE_COPY_SI_NO__">
<button id="COPY_SI__" onclick="COPY_SI()">&#35;</button>
<button id="COPY_NO__" onclick="COPY_NO()">&#35;</button>
</article>

<button id="ALT_QUESTION_MARK_POPUP__" onclick="ChiudiQuestionMarkPopup()" >?</button> 
<button id="QUESTION_MARK_POPUP__" onclick="QuestionMarkPopup()" >?</button> 

<div id="POPUP__" class="animate__animated animate__backInUp">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... POPUP__ </q>
</div>

<div id="VALORE_di_FonteDinamica__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... VALORE_di_FonteDinamica__</q>
</div>

<div id="FORM_per_inserimento_nome_file__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... FORM_per_inserimento_nome_file__</q>
</div>

<div id="LIV_01__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... LIV_01__</q>
</div>


`; // HEADER__




document.getElementById("POPUP__").innerHTML=
`
<style>
#POPUP__{
position:fixed;bottom:0%;left:0rem;
width:100%;
margin:0rem;
height:`+(AltezzaXQuestionMarkPopUp__*1)+`rem;
font-size:`+(FonteDinamica__*1)+`rem;
background-color:rgb(195,215,245);
color:black;

border-top:solid 0.15rem rgb(85,25,225);

border-top-left-radius:0.0rem;
border-top-right-radius:0.0rem;
border-bottom-left-radius:0.0rem;
border-bottom-right-radius:0.0rem;



display:none;
overflow:auto;

}

#CONTENITORE_CHIUDI_QUESTION_MARK_POPUP__{
margin:0rem;padding:0rem;
background-color:transparent;
text-align:center;
border-bottom:solid 0.15rem purple;
}

#CHIUDI_QUESTION_MARK_POPUP__{display:block;cursor:pointer;}
#CHIUDI_QUESTION_MARK_POPUP__ span{
background-color:transparent;color:purple;font-size:`+(FontSizeStandard__*1)+`rem;border-radius:0.00rem;word-break:break-all;
}
#CHIUDI_QUESTION_MARK_POPUP__ span:hover{
background-color:transparent;color:olive;border-radius:0.00rem;
}


#CONTENITORE_DI_POPUP__{position:static;}
#CONTENUTO_DI_POPUP__{position:static;}

#CHIUDI_QUESTION_MARK_POPUP_TITOLO__{ font-size:`+( FontSizeStandard__*0.75)+`rem!important; }

</style>


<section id="CONTENITORE_DI_POPUP__">
<article id="CONTENUTO_DI_POPUP__">
<aside id="CONTENITORE_CHIUDI_QUESTION_MARK_POPUP__">
<blockquote id="CHIUDI_QUESTION_MARK_POPUP__" onclick="ChiudiQuestionMarkPopup()">
<span id="CHIUDI_QUESTION_MARK_POPUP_TITOLO__">TheRollingThunderProject released THE_APPHP_UNO_DUE_23612_0900a_PhpAllUnoDueV02</span>
</blockquote>
</aside>

<aside>
<ol>
<li><div id="CHECK_STOP_AND_GO__"></div></li>
<li>
<div id="VISUALIZZA_COLORE_RANDOM__"></div>
</li>

<li id="DUEK23611A__"><q id="DUEK23611A_LINK__">Testo.txt</q><button  id="DUEK23611A_BUTTON__" onclick="CopiaDUEK23611A_LINK__()">INS</button></li>

<li id="DUEK23605A__"><q id="DUEK23605A_LINK__">../tes/23m05/index.txt</q><button  id="DUEK23605A_BUTTON__" onclick="CopiaDUEK23605A_LINK__()">INS</button></li>

</ol>
</aside>





<div id="VISUALIZZA_COMMENTO_01__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... VISUALIZZA_COMMENTO_01__</q>
</div>



</article>
</section>


`;



document.getElementById("FORM_per_inserimento_nome_file__").innerHTML=
`

<section id="INSERISCE_il_nome_del_file_da_cercare__">
 <input type="text" placeholder="Testo.txt" id="INPUT_NOME_FILE__" value="Testo.txt" >
 
 <div id="INPUT_INSERITO__">
 <div class="spinner" style="display:inline-block;">&nbsp;</div><q style="color:navy;">Loading elemento ... INPUT_INSERITO__</q><div id="SEMAFORO_PER_HEADER__"></div></div>

</section>


`;
document.getElementById("SEMAFORO_PER_HEADER__").innerHTML=
`
<style>
#CHIUDI_HEADER__{visibility:hidden;}
#CONTENITORE_COPY_SI_NO__{visibility:hidden;}


#QUESTION_MARK_POPUP__{visibility:hidden;}
#ALT_QUESTION_MARK_POPUP__{visibility:hidden;}


</style>
`;



function ChiudiHeader(){ 
document.querySelector("#HEADER__").style.display="none"; 
document.querySelector("#CHIUDI_HEADER__").style.display="none"; 
document.querySelector("#APRI_HEADER__").style.display="block"; 
//
document.querySelector("#THE_LAST_WALTZ__").style.display="block";
};

function ApriHeader(){ 
document.querySelector("#HEADER__").style.display="block"; 
document.querySelector("#CHIUDI_HEADER__").style.display="block"; 
document.querySelector("#APRI_HEADER__").style.display="none"; 

};








function NascondiNavigazioneInterna(){
// alert("NascondiNavigazioneInterna()");
document.querySelector("#NAV_INTERNA_TOP__").style.visibility="hidden";

}


function VediNavigazioneInterna(){
// alert("VediNavigazioneInterna()");
document.querySelector("#NAV_INTERNA_TOP__").style.visibility="visible";


}









function QuestionMarkPopup(){
document.querySelector("#QUESTION_MARK_POPUP__").style.display="none";
document.querySelector("#POPUP__").style.display="block";
};

function ChiudiQuestionMarkPopup(){
document.querySelector("#QUESTION_MARK_POPUP__").style.display="block";
document.querySelector("#POPUP__").style.display="none";
};







function CopiaDUEK23611A_LINK__(){
CopiatoDUEK23611A_LINK__=document.getElementById("DUEK23611A_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK23611A_LINK__;
}

function CopiaDUEK23605A_LINK__(){
CopiatoDUEK23605A_LINK__=document.getElementById("DUEK23605A_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK23605A_LINK__;
}
function CopiaDUEK23605A_LINK__clone(){
CopiatoDUEK23605A_LINK__=document.getElementById("DUEK23605A_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK23605A_LINK__;
}










function COPY_SI(){ // alert("COPY_SI"); 
clearInterval(EsegueIntervalPrendeNomeFileDaInput_00__);
EsegueIntervalPrendeNomeFileDaInput_00__=null;
document.querySelector("#COPY_SI__").style.display="none";
document.querySelector("#COPY_NO__").style.display="block";
}

function COPY_NO(){ // alert("COPY_NO"); 
//setInterval(PrendeNomeFileDaInput_00, 3000);
EsegueIntervalPrendeNomeFileDaInput_00__ = setInterval(PrendeNomeFileDaInput_00, 3000);
document.querySelector("#COPY_SI__").style.display="block";
document.querySelector("#COPY_NO__").style.display="none";
}





// aggiunta input range ini

function RangeDot_Dinamico_Input(){
ValoreInizialeRange__=50;
ValoreInizialeRange__=25;

 if(DESKTOP_CHECK==1){ValoreInizialeRange__=12.5;}
 document.getElementById("LIV_01__").innerHTML=
 `
 <input id="RANGER__" type="range" value="`+ValoreInizialeRange__+`" step="1" min="1" max="99">
 `;
}; // RangeDot_Dinamico_Input()
RangeDot_Dinamico_Input() ;


// Legge i valori del range
// 
// 
function LeggiRangeDot_Dinamico_Input(){
 let LetturaRange__ = document.getElementById("RANGER__").value;
 FonteDinamica__ = (LetturaRange__ * 0.075) ;
document.getElementById("VALORE_di_FonteDinamica__").innerHTML=`<q style="visibility:hidden;">`+( FonteDinamica__.toFixed(2) )+`rem`+`</q>`;

document.getElementById("SETTAGGI__").innerHTML=
`
<style>

#INPUT_NOME_FILE__{width:75%;font-size:2.5rem;}
#INSERISCE_il_nome_del_file_da_cercare__{font-size:1.25rem;}
#RANGER__{width:75%;}




#CHECK_STOP_AND_GO__{font-size:`+(FonteDinamica__*0.75)+`rem;}

#DUEK23611A_LINK__{font-size:`+(FonteDinamica__*0.75)+`rem;}
#DUEK23605A_LINK__{font-size:`+(FonteDinamica__*0.75)+`rem;}




#COMMENTI__{font-size:`+(FonteDinamica__*0.75)+`rem;}





#VISUALIZZA_TESTO_00__{font-size:`+(FonteDinamica__ * 1)+`rem;overflow:auto!important;

</style>
`;

};
setInterval(LeggiRangeDot_Dinamico_Input,1)


// aggiunta input range fin
// ////////////////////////
// ////////////////////////
// ////////////////////////
// ////////////////////////
// ////////////////////////
// ////////////////////////
// ////////////////////////
// AGGIUNTA LEGGE FILE INI
//
// Inserimento dei dati (Testo.txt) tramite input
//
//
function PrendeNomeFileDaInput_00(){
NomeDelFileDaInput__=document.getElementById("INPUT_NOME_FILE__").value;

// Cambia colore ogni setInterval
//
//
var LettereColoreRandom__ = '0123456789ABCDEF';
var CreaColoreRandom__ = '#';
var IColoreRandom__;
for (IColoreRandom__ = 0; IColoreRandom__ < 6; IColoreRandom__++ ) {
CreaColoreRandom__ = CreaColoreRandom__+LettereColoreRandom__[Math.round(Math.random() * 15)];
};
document.getElementById("COLORE_RANDOM__").innerHTML=
`
<style>

/* cambio colore quando setInterval */

#FILE_RICHIESTO__{margin-right: `+(FontSizeStandard__*0.25)+`rem;  background-color:`+CreaColoreRandom__+`!important;border-radius:0.25rem;}


#COPY_SI__{background-color:`+CreaColoreRandom__+`!important;}
#COPY_NO__{background-color:`+CreaColoreRandom__+`!important;}
#DUEK23605A_BUTTON__{font-size:`+(FontSizeStandard__*1)+`rem;}
#DUEK23611A_BUTTON__{font-size:`+(FontSizeStandard__*1)+`rem;}



#NAV_INTERNA__{width:75%;border:solid 0.15rem `+CreaColoreRandom__+`!important;}
#NAV_INTERNA__ * {
font-size:`+(FontSizeStandard__*1)+`rem;
}

#NAV_INTERNA_TOP__{position:fixed;top:0rem;top:`+(FontSizeStandard__*1.00)+`rem;left:0rem;}
#NAV_INTERNA_TOP__{position:fixed;top:0rem;background-color:rgb(254,211,192);color:rgb(85,25,225);top:`+(FontSizeStandard__*1.00)+`rem;left:0rem;border-radius:0.50rem;cursor:pointer;z-index:1000000000!important;}
#NAV_INTERNA_TOP__:hover{border:dashed 0.05rem rgb(85,25,225);}


#NASCONDI_NAVIGAZIONE_INTERNA__{position:absolute;top:`+(FontSizeStandard__*0.25)+`rem;left:75%;background-color:red;color:`+CreaColoreRandom__+`!important;font-size:`+(FontSizeStandard__*0.00)+`rem;border:solid 1.500rem red;border-radius:0.250rem; display:inline-block;visibility:visible;opacity:0.50;cursor:pointer;}
#NASCONDI_NAVIGAZIONE_INTERNA__:hover{opacity:1.00;}

#VEDI_NAVIGAZIONE_INTERNA__{position:absolute;top:`+(FontSizeStandard__*1.50)+`rem;left:75%;background-color:green;color:`+CreaColoreRandom__+`!important;font-size:`+(FontSizeStandard__*0.00)+`rem;border:solid 1.500rem green;border-radius:0.250rem;  display:inline-block;visibility:visible;opacity:0.50;cursor:pointer;}
#VEDI_NAVIGAZIONE_INTERNA__:hover{opacity:1.00;}




#VISUALIZZA_TESTO_00__{
margin-top:`+(HeightHeader__*1.5)+`rem;
margin-bottom:`+(HeightHeader__*1.5)+`rem;
}







</style>


`

;



document.getElementById("VISUALIZZA_COLORE_RANDOM__").innerHTML=`${CreaColoreRandom__}`;



if(NomeDelFileDaInput__!==""){
//
// esiste un nome
//
//
document.getElementById("INPUT_INSERITO__").innerHTML=
`<span id="FILE_RICHIESTO__">&nbsp;&nbsp;</span><span>File richiesto:</span> `+`<b>`+NomeDelFileDaInput__+`</b>`;

// Viene recuperato il file richiesto
//
//
LaSceltaInterattivaDinamica__ = NomeDelFileDaInput__;
let DirectoryDove__; DirectoryDove__="";
let File_00__; File_00__=LaSceltaInterattivaDinamica__;
// Viene aggiornato il file richiesto
//
//
File_00__ = DirectoryDove__+File_00__ + "?"+(new Date().getTime()) + (Math.random()) ;
// Il file richiesto viene passato
//
//
let Richiedo_00__ = new XMLHttpRequest(); 
Richiedo_00__.open("GET",File_00__,false);
Richiedo_00__.onreadystatechange = function(){
let Trovato_00__ = Richiedo_00__.responseText;
TestoTrovatoDaLeggere__ = Trovato_00__;
document.getElementById("VISUALIZZA_TESTO_00__").innerHTML=`${TestoTrovatoDaLeggere__}`; 
document.getElementById("CHECK_STOP_AND_GO__").innerHTML=`${File_00__}`; 
} ; Richiedo_00__.send();


}
else
{
document.getElementById("INPUT_INSERITO__").innerHTML=``;

};






};
// PrendeNomeFileDaInput_00();
// setInterval(PrendeNomeFileDaInput_00, 3000);
EsegueIntervalPrendeNomeFileDaInput_00__ = setInterval(PrendeNomeFileDaInput_00, 3000);

// AGGIUNTA LEGGE FILE FIN



document.getElementById("MAIN__").innerHTML=
`

<div id="VISUALIZZA_TESTO_00__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading elemento ... VISUALIZZA_TESTO_00__</q>
</div>

`;




let DirectoryDove_File_01__="./txt/";
DirectoryDove_File_01__="";
  let File_01__="Commento.txt";
File_01__=document.getElementById("INPUT_NOME_FILE__").value;

 File_01__ = DirectoryDove_File_01__+File_01__ + "?"+(new Date().getTime()) + (Math.random()) ; 
  let Richiedo_01__ = new XMLHttpRequest();
    
  Richiedo_01__.open("GET",File_01__,false);
  Richiedo_01__.onreadystatechange = function(){let Trovato_01__ = Richiedo_01__.responseText;
          
      Commento_01__ =    Trovato_01__;
      // 
         document.getElementById("VISUALIZZA_COMMENTO_01__").innerHTML=`${Commento_01__}`;

      // alert(Commento_01__);
          
  } ; Richiedo_01__.send();







</script>