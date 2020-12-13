window.onload = init;

function init() {
  document.getElementById("myDiv").onclick = addMyClass;
}

function addMyClass() {
  var classString = this.className; // returns the string of all the classes for myDiv
  var newClass = classString.concat(" main__section"); // Adds the class "main__section" to the string (notice the leading space)
  this.className = newClass; // sets className to the new string
}


inicio = document.querySelector('#inicio')
outro = document.querySelector('#outro')

function clickinicio() {
    inicio = document.querySelector('#inicio')
    outro = document.querySelector('#outro')
    outro.style = "display:none; transition:500ms";

    inicio.style = "display:flex; transition:500ms";

}

function clickoutro() {
    inicio = document.querySelector('#inicio')
    outro = document.querySelector('#outro')
    inicio.style = "display:none; transition:500ms";
    outro.addClass("in")
    // outro.style = "display:flex; transition:500ms";

}