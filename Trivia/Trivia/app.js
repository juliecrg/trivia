content.innerHTML = "Hola " + inputText.value;

const buttonSend = document.getElementById("button-send");
buttonSend.addEventListener("click", correct)
const inputsAnswer= Array.from(document.getElementsByClassName("datos"));

function correct(e){
  let score=0;
  for(let i=0; i < inputsAnswer.length; i++){
    if(inputsAnswer[i].checked){
      let respCorrect=inputsAnswer[i].value;
        if(respCorrect === "Roy Orbison"){
          alert("respuesta1 correcta muy bien")
          score ++;}
        else if(respCorrect === "Revolver"){
          alert("respuesta2 correcta muy bien")
          score ++;}
        else if(respCorrect === "Pyotr"){
          alert("respuesta3 correcta muy bien")
          score ++;}
        else if(respCorrect === "Titanic"){
          alert("respuesta1 correcta muy bien")
          score ++;}
        else if(respCorrect === "Lo que el viente se llevo"){
          alert("respuesta2 correcta muy bien")
          score ++;}
        else if(respCorrect === "Sean Connery"){
          alert("respuesta3 correcta muy bien")
          score ++;}
        else{
      }
    }

  }
  alert("obtuviste "+ score + " puntos")
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
