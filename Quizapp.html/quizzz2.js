
let data = [
    {
       quetion :" The full form of CSS is:",	
        a : "Cascade style sheets",
        b : "Color and style sheets",
        c : "Cascading style sheets",
        d : "None of the above",
        ans : "Cascade style sheets"     
    },
    {
        quetion : 	"The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        
         a : "writing-mode",
         b : "text-indent",
         c : "word-break",
         d : "None of the above",
         ans : "writing-mode"     

    },
    {
        quetion : "The property in CSS used to change the background color of an element is -",
        a : "bgcolor", 
        b : "color",
        c : "background-color",
        d : "All of the above",
        ans : "background-color"
    },
    {
        quetion : "The CSS property used to control the element's font-size is -",
        a : "text-style",
        b : "text-size",
        c : "font-size",
        d : "None of the above",
        ans : "font-size"

    },
    {
        quetion : "The HTML attribute used to define the inline styles is -",
        a : "style",
        b : "styles",
        c : "class",
        d : "None of the above",
        ans : "style"
    },
    {
        quetion : " The HTML attribute used to define the internal stylesheet is -",
        a : "<style>",
        b : "style",
        c : "<link>",
        d : "<script>",
        ans : "<style>"
    },
    {
        quetion : " Which of the following CSS property is used to set the background image of an element?",
        a : "background-attachment",
        b : "background-image",
        c : "background-color",
        d : "None of the above",
        ans : "background-image"
    },
    {
        quetion : "The CSS property used to draw a line around the elements outside the border?",
        a : "border",
        b : "outline",
        c : "padding",
        d : "line",
        ans : "outline"
    },
    {
        quetion : " Which of the following property is used as the shorthand property for the padding properties?",
        a : "padding-left",
        b : "padding-right",
        c : "padding",
        d : "All of the above",
        ans : "padding"
    },
    {
        quetion : "Which of the following CSS property is used to specify the space between every letter inside an element?",
        a : "alpha-spacing",
        b : "character-spacing",
        c : "letter-spacing",
        d : "alphabet-spacing",
        ans : "letter-spacing"
    }
]

let name = localStorage.getItem('name');
let score = 0;
let right = 0;
let wrong = 0;
let tim = 300;
let stop;
let index = 0;

function StartGame(){
    document.getElementById("start").style.display = "none" ;
    document.getElementById("ques").style.display = "block" ;
    timer(); 
    startqution();
}
let respose = document.querySelectorAll(".opt");
function startqution(){
    document.getElementById("questionNo").innerHTML = index+1;
    document.getElementById("questionbox").innerHTML = data[index].quetion;
    document.getElementById("opt1").innerHTML = data[index].a;
    document.getElementById("opt2").innerHTML = data[index].b;
    document.getElementById("opt3").innerHTML = data[index].c;
    document.getElementById("opt4").innerHTML = data[index].d;
}
function checkans(SelectedOptions){
    if(SelectedOptions.innerHTML == data[index].ans){
        SelectedOptions.style.backgroundColor = "green";
        right++;
        score = score + 10;
        document.getElementById("sco").innerHTML = score;
    }
    else{    
        SelectedOptions.style.backgroundColor = "red";
        wrong++;
        score = score - 5 ;   
        document.getElementById("sco").innerHTML = score;
    }
    for(i=0;i<respose.length;i++){
        respose[i].classList.add("disabled");
    }

}

function NextQution(){
    index++;
    for(i=0;i<respose.length;i++){
        respose[i].classList.remove("disabled");   
    }
    
    let reset = document.querySelectorAll(".opt");
    reset.forEach((el) => {
       
       el.style.backgroundColor = "white"; 
    });
    if(index < 9){
        startqution();
    }
    else if (index == 9){
        document.getElementById("btn").innerHTML = "Submit";
        startqution();
    }
    else{
        EndGame();  
    }
}

function timer(){
    stop = setInterval(function(){
        tim--;
        document.getElementById("time").innerHTML = tim ;
        if(tim == 0){
            EndGame();
        }
    },1000)
}
function EndGame(){
    
    clearInterval(stop);
    document.getElementById("ques").style.display = "none";
    document.getElementById("result").style.display = "block";
    
    document.getElementById("nam").innerHTML = name;
    document.getElementById("Corr").innerHTML = right;
    document.getElementById("Wrong").innerHTML = wrong;
    document.getElementById("skiped").innerHTML = 10 - right - wrong;
    document.getElementById("TimeTaken").innerHTML = 300 - tim;
    document.getElementById("scr").innerHTML = score ;
}