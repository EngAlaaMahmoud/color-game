var numSquars=6;
var pickedcolor;
var colors=[];
var squars = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messagedisplay = document.getElementById("message");
var h1style = document.querySelector("#h1score");
var resetbutton=document.querySelector("#reset");
var modebutton=document.querySelectorAll(".mode");
init();
function init(){
       SetUpModeButtons();
       SetUpSqaures();        
       reset();
    }
    //-----------
    //funcction SetUpSqaures
    function SetUpSqaures(){
        for(var i = 0 ; i < squars.length ; i++)
        {                 
            squars[i].style.background = colors[i];
            squars[i].addEventListener( "click" , function()
            {
                var clickedcolor=this.style.background;
                //compare color to picked color
                if( clickedcolor == pickedcolor)
                {
                    messagedisplay.textContent = "correct";
                    resetbutton.textContent="play again?"
                    changecolor(clickedcolor);
                    //add the color to h1 
                    h1style.style.background=clickedcolor;
                }
                else
                {
                    this.style.background = "#232323";
                    messagedisplay.textContent = "try again";
                }
            }); 
        
        }
    }
    //setupmde fuction
 function SetUpModeButtons(){
  for(var i=0;i<modebutton.length;i++)
   {
            modebutton[i].addEventListener("click",function(){
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            this.classList.add("selected");
             this.textContent==="Easy"? numSquars=3:numSquars=6;
            reset();
            })}
    }
//end of setupmode function
//function reset
function reset(){
   colors=genrateRandomcolor(numSquars);
   pickedcolor = pickcolor();
   colorDisplay.textContent =pickedcolor;
   resetbutton.textContent="new color";
   messagedisplay.textContent="";
   for(var i=0;i<squars.length;i++)
   {
       if(colors[i])
       {
        squars[i].style.display="block";
        squars[i].style.background=colors[i];
       }
       else
       {
        squars[i].style.display="none";
        }
   }
   h1style.style.background="steelblue";      
   }
//end of function reset
//-----------------------------------
//start of reset button control pannel
resetbutton.addEventListener("click",function(){
reset();
});
//end of reset button 
//-----------------------------------
function changecolor(color)
 {
    for(var i = 0 ; i<squars.length ; i++) 
     {
        squars[i].style.background = color;
     }  
 }
 //----------------------------
 function pickcolor()
 {

     var random=Math.floor(Math.random()*colors.length);
     return colors[random]

 }
 //--------------------------------
function genrateRandomcolor(num)
 {
    //make an  array 
    var arr =[]
    //add num random colors to array
        for(var i = 0; i<num ; i++)
        {
        // get random color and push to array
        arr.push(randomcolor());
        }
    //return an array
    return arr;
}
//-----------------------

function randomcolor()
{
//pick a red from 0-255
var r =Math.floor(Math.random()*256);
//pick a green from 0-255
var g=Math.floor(Math.random()*256);
//pick a blue from 0-255
var b =Math.floor(Math.random()*256);
//return
return "rgb("+r+", "+g+", "+b+")";
}
//----------------------