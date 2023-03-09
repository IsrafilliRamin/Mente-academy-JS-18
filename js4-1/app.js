let malinQiymeti = document.querySelectorAll(".malinQiymeti");
let sayi = document.querySelectorAll(".sayi");
let cemi = document.querySelectorAll(".cemi");
let increment = document.querySelectorAll(".incrment");
let decrement = document.querySelectorAll(".decrement");
let umumiSay = document.querySelector(".umumiSay");
let cem ;
let YeniCem = 0;
let LastValue = 0


for (let i = 0; i < increment.length; i++) {
    cemi[i].innerHTML = malinQiymeti[i].textContent;
   YeniCem = parseInt(cemi[i].textContent) + YeniCem;
  
    umumiSay.innerHTML = YeniCem
    let count = 1;
  increment[i].addEventListener("click", (event) => {
    count++;
     

    sayi[i].innerHTML = count;
        let conta = event.target;
        let YeniMalinQiymeti = conta.parentNode.previousElementSibling.children[1].textContent;
        let umumiCem = conta.parentNode.nextElementSibling.nextElementSibling.children[1].textContent;
      
       cem = YeniMalinQiymeti * count;
      cemi[i].innerHTML = cem;


      LastValue = parseInt(YeniMalinQiymeti) + LastValue
        umumiSay.innerHTML = YeniCem + LastValue
    

        


  });
}
















/* let newPrice = 200;
cemi.innerHTML = newPrice
malinQiymeti.innerHTML = newPrice;
let newCount = 1;
sayi.innerHTML = newCount; */

/* increment.addEventListener("click",()=>{
    newCount ++ ;
    sayi.innerHTML = newCount;
    cemi.innerHTML = newPrice * newCount

    if(newCount > 1){
        decrement.removeAttribute("disabled");
        decrement.style.backgroundColor = "green"
    }

}) */

/* 
decrement.addEventListener("click",()=>{
    

    if(newCount <= 1){
        decrement.setAttribute("disabled","")
        decrement.style.backgroundColor = "gray"
        newCount = 1;
       
    }else{
        newCount -- ;
        sayi.innerHTML = newCount;
        cemi.innerHTML = newPrice * newCount
    }

})

 */
