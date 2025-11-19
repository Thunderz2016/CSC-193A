const btn = document.querySelector("#biggerbutton");
const mooBtn = document.querySelector("#moobutton");
const radio1 = document.querySelector("#radio1"); 
const radio2 = document.querySelector("#radio2"); 

function helloWorld() {
    // alert("Hello, World!");
    document.getElementById("text").style.fontSize = "24pt";
}

/**
 * Function for the "Moo" button, it changes the text in textarea to upper case,
 * then add the "-Moo" suffix to the last word of each sentence.
 */
function moo() {
    upperCaseText();
    addMooSuffix();
}

function upperCaseText() {
    let textAreaValue = document.getElementById("text").value;
    document.getElementById("text").value = textAreaValue.toUpperCase();
}

function addMooSuffix() {
    console.log("addMooSuffix called.");
    let textAreaTokens = document.getElementById("text").value.split(" ");
    let resultTextArray = [];  // necessary because idk how to modify array content

    textAreaTokens.forEach(element => {
        if(element.endsWith(".")) {
            element = element.substring(0, element.length - 1) + "-Moo.";   // replaces the period (2nd to last char) with the suffix and a new period
            resultTextArray.push(element);
        } else {
            resultTextArray.push(element);
        }
    });
    document.getElementById("text").value = resultTextArray.join(" ");  // join all the processed elements together to form the new sentence
}

function checkRadio() {
    if (radio1.checked) {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } else if (radio2.checked) {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";  // remove underline

    }
}

btn.addEventListener("click", helloWorld);
mooBtn.addEventListener("click", moo);
radio1.addEventListener("change", checkRadio);
radio2.addEventListener("change", checkRadio);