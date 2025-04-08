//function to get and translate morse to abc
function get_and_translate_morse() {
    //get the input from the input field
    var rawinput = document.getElementById('Input');
    //get the value of the input
    var theinput = rawinput.value
    
    //clear the error filed
    document.getElementById('error').innerHTML = "";

    //check if input is valid
    if(theinput.indexOf("a") != -1 || theinput.indexOf("A") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";
        return "";
    }
    if(theinput.indexOf("b") != -1 || theinput.indexOf("B") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("c") != -1 || theinput.indexOf("C") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("d") != -1 || theinput.indexOf("D") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("e") != -1 || theinput.indexOf("E") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("f") != -1 || theinput.indexOf("F") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("g") != -1 || theinput.indexOf("G") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("h") != -1 || theinput.indexOf("H") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("i") != -1 || theinput.indexOf("I") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("j") != -1 || theinput.indexOf("J") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("k") != -1 || theinput.indexOf("K") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("l") != -1 || theinput.indexOf("L") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }  
    if(theinput.indexOf("m") != -1 || theinput.indexOf("M") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("n") != -1 || theinput.indexOf("N") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("o") != -1 || theinput.indexOf("O") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("p") != -1 || theinput.indexOf("P") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("q") != -1 || theinput.indexOf("Q") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("r") != -1 || theinput.indexOf("R") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("s") != -1 || theinput.indexOf("S") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("t") != -1 || theinput.indexOf("T") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("u") != -1 || theinput.indexOf("U") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("v") != -1 || theinput.indexOf("V") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("w") != -1 || theinput.indexOf("W") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("x") != -1 || theinput.indexOf("X") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("y") != -1 || theinput.indexOf("Y") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }
    if(theinput.indexOf("z") != -1 || theinput.indexOf("Z") != -1){
        document.getElementById('error').innerHTML = "#*#*#*#*#*#*#Invalid input#*#*#*#*#*#*#";   
        return "";
    }

        //clear the error filed
        document.getElementById('error').innerHTML = "";

    //replace all spaces with two spaces
    var theinput = theinput.replaceAll(" ","  ")

    //add spaces to the beginning and end of the input
    var theinput = " "+theinput+" "

    //translate morse abc
    var theinput = theinput.replaceAll(" .- ","a")
    var theinput = theinput.replaceAll(" -... ","b")
    var theinput = theinput.replaceAll(" -.-. ","c")
    var theinput = theinput.replaceAll(" -.. ","d")
    var theinput = theinput.replaceAll(" . ","e")
    var theinput = theinput.replaceAll(" ..-. ","f")
    var theinput = theinput.replaceAll(" --. ","g")
    var theinput = theinput.replaceAll(" .... ","h")
    var theinput = theinput.replaceAll(" .. ","i")
    var theinput = theinput.replaceAll(" .--- ","j")
    var theinput = theinput.replaceAll(" -.- ","k")
    var theinput = theinput.replaceAll(" .-.. ","l")
    var theinput = theinput.replaceAll(" -- ","m")
    var theinput = theinput.replaceAll(" -. ","n")
    var theinput = theinput.replaceAll(" --- ","o")
    var theinput = theinput.replaceAll(" .--. ","p")
    var theinput = theinput.replaceAll(" --.- ","q")
    var theinput = theinput.replaceAll(" .-. ","r")
    var theinput = theinput.replaceAll(" ... ","s")
    var theinput = theinput.replaceAll(" - ","t")
    var theinput = theinput.replaceAll(" ..- ","u")
    var theinput = theinput.replaceAll(" ...- ","v")
    var theinput = theinput.replaceAll(" .-- ","w")
    var theinput = theinput.replaceAll(" -..- ","x")
    var theinput = theinput.replaceAll(" -.-- ","y")
    var theinput = theinput.replaceAll(" --.. ","z")

    //translate morse numbers
    var theinput = theinput.replaceAll(" .---- ","1")
    var theinput = theinput.replaceAll(" ..--- ","2")
    var theinput = theinput.replaceAll(" ...-- ","3")
    var theinput = theinput.replaceAll(" ....- ","4")
    var theinput = theinput.replaceAll(" ..... ","5")
    var theinput = theinput.replaceAll(" -.... ","6")
    var theinput = theinput.replaceAll(" --... ","7")
    var theinput = theinput.replaceAll(" ---.. ","8")
    var theinput = theinput.replaceAll(" ----. ","9")
    var theinput = theinput.replaceAll(" ----- ","0")

    //translate morse punctuation and symbols
    var theinput = theinput.replaceAll(" --..-- ",",")
    var theinput = theinput.replaceAll(" ..--.. ","?")
    var theinput = theinput.replaceAll(" .----. ","'")
    var theinput = theinput.replaceAll(" -.-.-- ","!")
    var theinput = theinput.replaceAll(" -..-. ","/")
    var theinput = theinput.replaceAll(" -.--. ","(")
    var theinput = theinput.replaceAll(" -.--.- ",")")
    var theinput = theinput.replaceAll(" .-... ","&")
    var theinput = theinput.replaceAll(" ---... ",":")
    var theinput = theinput.replaceAll(" -.-.-. ",";")
    var theinput = theinput.replaceAll(" ..--.- ","_")
    var theinput = theinput.replaceAll(" .-..-. ",'"')
    var theinput = theinput.replaceAll(" ...-..- ","$")
    var theinput = theinput.replaceAll(" .-.-. ","@")

    //replace all slashes with spaces
    var theinput = theinput.replaceAll("/"," ")
    //replace all triple spaces with one space
    var theinput = theinput.replaceAll("   "," ")

    //return the input
    return(theinput)
}

//a function to add a dash to the input
function adddash() {
    document.getElementById('Input').value += '-';
}

//a function to add a dite to the input
function adddite() {
    document.getElementById('Input').value += '.';
}

//a function to add a space to the input
function addspace() {
    document.getElementById('Input').value += ' ';
}

//a function to show the input in output field
function show_abc_output() {
    document.getElementById('output').value = get_and_translate_morse()
}

//a function to clear input and output
function clearfields() {
    document.getElementById('Input').value = '';
    document.getElementById('output').value = '';
} 
// function to translate abc to morse
function get_and_translate_abc() {
//get the input from the input field
var therawinput = document.getElementById('Input');
//get the value of the input
var theinput = therawinput.value

    //clear the error filed
    document.getElementById('error').innerHTML = "";

//translate small abc to morse
var theinput = theinput.replaceAll("a",".- ")
var theinput = theinput.replaceAll("b","-... ")
var theinput = theinput.replaceAll("c","-.-. ")
var theinput = theinput.replaceAll("d","-.. ")
var theinput = theinput.replaceAll("e",". ")
var theinput = theinput.replaceAll("f","..-. ")
var theinput = theinput.replaceAll("g","--. ")
var theinput = theinput.replaceAll("h",".... ")
var theinput = theinput.replaceAll("i",".. ")
var theinput = theinput.replaceAll("j",".--- ")
var theinput = theinput.replaceAll("k","-.- ")
var theinput = theinput.replaceAll("l",".-.. ")
var theinput = theinput.replaceAll("m","-- ")
var theinput = theinput.replaceAll("n","-. ")
var theinput = theinput.replaceAll("o","--- ")
var theinput = theinput.replaceAll("p",".--. ")
var theinput = theinput.replaceAll("q","--.- ")
var theinput = theinput.replaceAll("r",".-. ")
var theinput = theinput.replaceAll("s","... ")
var theinput = theinput.replaceAll("t","- ")
var theinput = theinput.replaceAll("u","..- ")
var theinput = theinput.replaceAll("v","...- ")
var theinput = theinput.replaceAll("w",".-- ")
var theinput = theinput.replaceAll("x","-..- ")
var theinput = theinput.replaceAll("y","-.-- ")
var theinput = theinput.replaceAll("z","--.. ")

//translate capital abc to morse
var theinput = theinput.replaceAll("A",".- ")
var theinput = theinput.replaceAll("B","-... ")
var theinput = theinput.replaceAll("C","-.-. ")
var theinput = theinput.replaceAll("D","-.. ")
var theinput = theinput.replaceAll("E",". ")
var theinput = theinput.replaceAll("F","..-. ")
var theinput = theinput.replaceAll("G","--. ")
var theinput = theinput.replaceAll("H",".... ")
var theinput = theinput.replaceAll("I",".. ")
var theinput = theinput.replaceAll("J",".--- ")
var theinput = theinput.replaceAll("K","-.- ")
var theinput = theinput.replaceAll("L",".-.. ")
var theinput = theinput.replaceAll("M","-- ")
var theinput = theinput.replaceAll("N","-. ")
var theinput = theinput.replaceAll("O","--- ")
var theinput = theinput.replaceAll("P",".--. ")
var theinput = theinput.replaceAll("Q","--.- ")
var theinput = theinput.replaceAll("R",".-. ")
var theinput = theinput.replaceAll("S","... ")
var theinput = theinput.replaceAll("T","- ")
var theinput = theinput.replaceAll("U","..- ")
var theinput = theinput.replaceAll("V","...- ")
var theinput = theinput.replaceAll("W",".-- ")
var theinput = theinput.replaceAll("X","-..- ")
var theinput = theinput.replaceAll("Y","-.-- ")
var theinput = theinput.replaceAll("Z","--.. ")

//translate morse numbers
var theinput = theinput.replaceAll("1",".---- ")
var theinput = theinput.replaceAll("2","..--- ")
var theinput = theinput.replaceAll("3","...-- ")
var theinput = theinput.replaceAll("4","....- ")
var theinput = theinput.replaceAll("5","..... ")
var theinput = theinput.replaceAll("6","-.... ")
var theinput = theinput.replaceAll("7","--... ")
var theinput = theinput.replaceAll("8","---.. ")
var theinput = theinput.replaceAll("9","----. ")
var theinput = theinput.replaceAll("0","----- ")

//translate morse punctuation and symbols
var theinput = theinput.replaceAll(",","--..-- ")
var theinput = theinput.replaceAll("?","..--.. ")
var theinput = theinput.replaceAll("'",".----. ")
var theinput = theinput.replaceAll("!","-.-.-- ")
var theinput = theinput.replaceAll("/","-..-. ")
var theinput = theinput.replaceAll("(","-.--. ")
var theinput = theinput.replaceAll(")","-.--.- ")
var theinput = theinput.replaceAll("&",".-... ")
var theinput = theinput.replaceAll(":","--..... ")
var theinput = theinput.replaceAll(";","-.-.-. ")
var theinput = theinput.replaceAll("_","..--.- ")
var theinput = theinput.replaceAll('"',".-..-. ")
var theinput = theinput.replaceAll("$","...-..- ")
var theinput = theinput.replaceAll("@",".-.-. ")

//return the input
return(theinput)
}
function show_morse_output() {
    document.getElementById('output').value = get_and_translate_abc()
}

function check_input(){
    //get the input from the input field
    var rawinput = document.getElementById('Input');
    var rawinput2 = document.getElementById('output');
    //get the value of the input
    var theinput = rawinput.value
    if(theinput == ""){
        document.getElementById("clearb").disabled = true;
    }
    else{
        document.getElementById("clearb").disabled = false;
    }
    var theinput2 = rawinput2.value
    if(theinput2 == ""){
        document.getElementById("clearb").disabled = true;
    }
    else{
        document.getElementById("clearb").disabled = false;
    }
}
setInterval(check_input,10);