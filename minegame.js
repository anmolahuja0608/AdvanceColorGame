var numsquare=9;
var square=document.querySelectorAll(".square");
var p=document.querySelector(".message");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");
var veryhardbtn=document.querySelector("#veryhard");
var h1=document.querySelector("h1");
var newgamebutton=document.querySelector("#newgame");
var colors=generaterandoncolors(numsquare);




function generaterandoncolors(numsquare){
	var arr=[];
	for(var i=0;i<numsquare;i++){
		var a=Math.floor(Math.random()* 256);
		var b=Math.floor(Math.random()* 256);
		var c=Math.floor(Math.random()* 256);
		arr[i]="rgb("+ a + ", " + b + ", " + c + ")";
	}
	return arr;
}
for(var i=6;i<9;i++){
  square[i].style.display="none";
}

var pickcolor=colors[Math.floor(Math.random() * 6)];

var change=document.querySelector("#displayname");
change.textContent=pickcolor;

for(var i=0;i<square.length;i++){
	
       
       	square[i].style.background=colors[i];
       
	}
for(var j=0;j<square.length;j++){
	square[j].addEventListener("click",function(){
		
     if(this.style.background===pickcolor){
     	h1.style.background=pickcolor;
     	p.textContent="wow you got it";
     	newgamebutton.textContent="Play Again?";
     	for(var k=0;k<square.length;k++){
     		square[k].style.background=pickcolor;
     	}
     }
     else{
     	p.textContent="sorry..!! Try Again";
     	this.style.background="#232323";
     }

	});
}

newgamebutton.addEventListener("click",function(){
   
   colors=generaterandoncolors(numsquare);
   pickcolor=colors[Math.floor(Math.random() * numsquare)];
   change.textContent=pickcolor;
   for(var i=0;i<square.length;i++){
	 	square[i].style.background=colors[i];
     p.textContent=" "; 	}
	h1.style.background="rgb(130, 131, 234)";
});

easybtn.addEventListener("click",function(){
 easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
veryhardbtn.classList.remove("selected");
 numsquare=3;
 p.textContent=" ";
 colors=generaterandoncolors(numsquare);
 pickcolor=colors[Math.floor(Math.random() * 3)];
 change.textContent=pickcolor;
 h1.style.background="rgb(130, 131, 234)";
 newgamebutton.textContent="new game";

 for(var i=0;i<square.length;i++){
if(colors[i]){
   square[i].style.background=colors[i];
 }
 else{
 	square[i].style.display="none";
}
}
});

hardbtn.addEventListener("click",function(){
easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
veryhardbtn.classList.remove("selected");
numsquare=6;
p.textContent=" ";
h1.style.background="rgb(130, 131, 234)";
newgamebutton.textContent="new game";
colors=generaterandoncolors(numsquare);
 pickcolor=colors[Math.floor(Math.random() * numsquare)];
 change.textContent=pickcolor;

 for(var i=0;i<square.length;i++){
  square[i].style.display="block";
 if(colors[i]){
   square[i].style.background=colors[i];
 }
 else{
  square[i].style.display="none";
}
}
});




veryhardbtn.addEventListener("click",function(){
easybtn.classList.remove("selected");
hardbtn.classList.remove("selected");
veryhardbtn.classList.add("selected");
numsquare=9;
p.textContent=" ";
h1.style.background="rgb(130, 131, 234)";
newgamebutton.textContent="new game";
colors=generaterandoncolors(numsquare);
 pickcolor=colors[Math.floor(Math.random() * numsquare)];
 change.textContent=pickcolor;

 for(var i=0;i<square.length;i++){
  // square[i].classList.add("changesize");
  square[i].style.display="block";
   square[i].style.background=colors[i];
  

}
});
