let textbox = document.getElementById("textbox");
textbox.addEventListener("input",textCount);

function textCount(){

   let text = this.value;
   document.getElementById("char").innerHTML = text.length;

text = text.trim();
   let word = text.split(" ");

   let cleanword = word.filter(function(elm){
      return elm != "";
   });
   document.getElementById("word").innerHTML = cleanword.length;
}

setInterval(displayName, 5000);
function displayName(){

   document.getElementById("name").innerHTML = "By Ankit Kushwaha";
  
}