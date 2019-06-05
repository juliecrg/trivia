// content.innerHTML = "Hola " + inputText.value;
const userName = document.getElementById("user-name");
const button1Send = document.getElementById("botonEnviar");
button1Send.addEventListener("click", nombre);

//llama la funcion nombre
function nombre(e){
  //content.innerHTML = "Hola " + inputText.value;
  document.getElementById('print-name').innerHTML += 'Bienvenidx ' + userName.value;
  userName.value = "";
}


const buttonSend = document.getElementById("botonEvaluar");
buttonSend.addEventListener("click", correct)
const inputsAnswer= Array.from(document.getElementsByClassName("datos"));

function correct(e){
  let score=0;
  for(let i=0; i < inputsAnswer.length; i++){
    if(inputsAnswer[i].checked){
      let respCorrect=inputsAnswer[i].value;
        if(respCorrect === "Isaac Newton"){
          //alert("respuesta1 correcta muy bien")
          score ++;}
        else if(respCorrect === "Carbono"){
          //alert("respuesta2 correcta muy bien")
          score ++;}
        else if(respCorrect === "Neuronas"){
          //alert("respuesta3 correcta muy bien")
          score ++;}
        else if(respCorrect === "Julia Roberts"){
          //alert("respuesta1 correcta muy bien")
          score ++;}
        else if(respCorrect === "Cirque du Soleil"){
          //alert("respuesta2 correcta muy bien")
          score ++;}
        else if(respCorrect === "Carnaval de Brasil"){
          //alert("respuesta3 correcta muy bien")
          score ++;}
        else{
      }
    }

  }
  document.getElementById('print-score').innerHTML += 'Resultado ' + score;
  //alert("obtuviste "+ score + " puntos")
}
function changeSection(id){ //id recibe el id de la seccion a cambiar:
 console.log(id)
// crea hoja de estilo para la seccion correspondiente
    respCorrect.createElement('style') //crea el elemneto estilo en una variable
    respCorrect.innerHTML = "section {background-color:yellow;}";
  // respcorrect.innerHTML =
    document.body.appendChild(sheet);
//    }
}
