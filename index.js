let para = document.querySelector('.count');
let count = 0, clear;


document.querySelector(".start").addEventListener("click" , () =>{
   clear= setInterval(ValueCount,1000);
});

document.querySelector(".stop").addEventListener("click" , () =>{
   clearInterval(clear);
});

function ValueCount(){
    count++;
    para.innerHTML = count;


}