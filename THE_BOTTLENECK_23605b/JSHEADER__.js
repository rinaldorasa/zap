


//
// JSHEADER__.js 236051915a
//







document.getElementById("HEADER__").innerHTML=
`
<style>
#HEADER__{
position:fixed;top:0rem;left:0rem;

background-color:rgb(197,212,191);
color:black;

width:100%;
height:`+(HeightHeader__ * 1)+`rem;

overflow:auto;

z-index:1000000000!important;

border:solid 0.00rem red;

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
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading... POPUP__ </q>
</div>

<div id="VALORE_di_FonteDinamica__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading... VALORE_di_FonteDinamica__</q>
</div>

<div id="FORM_per_inserimento_nome_file__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading... FORM_per_inserimento_nome_file__</q>
</div>

<div id="LIV_01__">
<div class="spinmin">&nbsp;</div><q style="font-size:0.75rem;">Loading... LIV_01__</q>
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


</style>


<section id="CONTENITORE_DI_POPUP__">
<article id="CONTENUTO_DI_POPUP__">
<aside id="CONTENITORE_CHIUDI_QUESTION_MARK_POPUP__">
<blockquote id="CHIUDI_QUESTION_MARK_POPUP__" onclick="ChiudiQuestionMarkPopup()">
<span>TheRollingThunderProject released THE_BOTTLENECK_studio_23605_1900b_(BLACKBOARD)</span>
</blockquote>
</aside>

<aside>
<ol>
<li><div id="CHECK_STOP_AND_GO__"></div></li>

<li id="DUEK2305__"><q id="DUEK2305_LINK__">../tes/23m05/index.txt</q><button onclick="CopiaDUEK2305_LINK__()">INS</button></li>

</ol>
</aside>

<blockquote id="COMMENTI__">
<q>
<ol>
<li><pre>word-break:break-all</pre></li>
<li>Si può tramite <q>fetch</q> di un file.txt inserire (insert) un file.css-like?</li>
<li>Una simil-compilazione per snellire la lettura del codice</li>
<li></li>

</ol>
</q>
</blockquote>

</article>
</section>


`;



document.getElementById("FORM_per_inserimento_nome_file__").innerHTML=
`

<section id="INSERISCE_il_nome_del_file_da_cercare__">
 <input type="text" placeholder="Testo.txt" id="INPUT_NOME_FILE__" value="Testo.txt" >
 
 <div id="INPUT_INSERITO__">
 <div class="spinner" style="display:inline-block;">&nbsp;</div><q style="color:navy;">Loading... INPUT_INSERITO__</q></div>

</section>


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




function QuestionMarkPopup(){
document.querySelector("#QUESTION_MARK_POPUP__").style.display="none";
document.querySelector("#POPUP__").style.display="block";
};

function ChiudiQuestionMarkPopup(){
document.querySelector("#QUESTION_MARK_POPUP__").style.display="block";
document.querySelector("#POPUP__").style.display="none";
};




function CopiaDUEK2305_LINK__(){
CopiatoDUEK2305_LINK__=document.getElementById("DUEK2305_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK2305_LINK__;
}
function CopiaDUEK2305_LINK__clone(){
CopiatoDUEK2305_LINK__=document.getElementById("DUEK2305_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK2305_LINK__;
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




