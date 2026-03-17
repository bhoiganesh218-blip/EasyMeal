let btn = document.querySelector(".btn")

let food ="";
let person = "";
let type = "";



//=======> Food Disolay and Value <======//
let meal = document.querySelector("#Meal")
let Roti = document.querySelector("#Roti")
let Paratha = document.querySelector("#Paratha")


meal.onclick=()=>{
  food = "Meal";
  document.querySelector("#fooddisplay").setAttribute("src","Meal.jpg")
}
Roti.onclick=()=>{
  food = "Roti";
  document.querySelector("#fooddisplay").setAttribute("src","Roti.jpg")
}
Paratha.onclick=()=>{
  food = "Paratha";
  document.querySelector("#fooddisplay").setAttribute("src","Paratha.jpg")
}

//======> Person Name and display <======//

let key = document.querySelector(".button1");
let per = document.querySelector("#persondip");

key.onchange = ()=>{
  if (key.value === "Choose"){
    per.setAttribute("src","First image.jpg")
    person = "";
  } else
  if(key.value === "Ganesh"){
    per.setAttribute("src","ganesh.jpg")
    person = "Ganesh";
  }else
  if(key.value === "Badal"){
    per.setAttribute("src","badal.jpg")
    person = "Badal";
  }
  if(key.value === "Padma"){
    per.setAttribute("src","padma.jpg")
    person = "Padma";
  }
  if(key.value === "Karan"){
    per.setAttribute("src","karan.jpg")
    person = "Karan";
  }
  if(key.value === "Raja"){
    per.setAttribute("src","raja.jpg")
    person = "Raja";
  }
  if(key.value === "Prajag"){
    per.setAttribute("src","prajag.jpg")
    person = "Prajag";
  }
  
}
//======>  Type and display <======//
let veg = document.querySelector("#veg");
let nveg = document.querySelector("#non-veg");
veg.onclick =()=>{
document.querySelector("#type").setAttribute("src","Veg.jpg")
type = "veg"
}

nveg.onclick =()=>{
document.querySelector("#type").setAttribute("src","Nonveg.jpg")
type = "non-veg"
}



//===========> Displsy list <===========//

btn.addEventListener("click",()=>{
let name = document.querySelector(".button1").value;
let li = document.createElement("li");
li.innerText = name + "_1"+ food +"_" +type;
let cross = document.createElement("span")
cross.innerText = "__❌"
li.append(cross)
document.querySelector(".addlist").append(li)
cross.onclick = ()=>{
  li.remove();
}
document.querySelector("#fooddisplay").setAttribute("src","Second image.jpg")
per.setAttribute("src","First image.jpg")

document.querySelector("#type").setAttribute("src","Third image.jpg")
document.querySelector(".button1").value = ""

food ="";
 person = "";
 type = "";

})

//========> MAIN WORK <===============//

let plc = document.querySelector(".plc")
let ul = document.querySelector(".addlist")
plc.addEventListener("click",()=>{

navigator.clipboard.writeText(ul.innerText)
alert("Code Copied!");
window.location.href = "https://wa.me/";
location.reload();

})
