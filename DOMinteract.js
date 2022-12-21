var btnsPlus = document.querySelectorAll('.btnPlus')
for (let i = 0; i < btnsPlus.length; i++) {
    btnsPlus[i].addEventListener('click',function(){
         btnsPlus[i].previousElementSibling.innerText++
         SommeTotal()
    })    
}
var btnsMoins = document.querySelectorAll('.btnMoins')

for (let i = 0; i < btnsMoins.length; i++) {
    btnsMoins[i].addEventListener('click',function(){
        if (btnsMoins[i].nextElementSibling.innerText>0) {
            btnsMoins[i].nextElementSibling.innerText--
            SommeTotal()
        }
    })
    
}


var btnTrash = document.querySelectorAll('.fa-trash')
for (let i = 0; i < btnTrash.length; i++) {
    btnTrash[i].addEventListener('click',function(){
        btnTrash[i].parentElement.remove()
        SommeTotal()
    })    
}


var btnHeart = document.querySelectorAll('.fa-heart')
for (let i = 0; i < btnHeart.length; i++) {
    btnHeart[i].addEventListener('click',function(){
        btnHeart[i].classList.toggle('mamino')
    })    
}

function SommeTotal(){
    var priceTab = document.querySelectorAll('.price')
    var qteTab = document.querySelectorAll('.qte')
    var Somme = document.querySelector('#total')
    var sum = 0

    for (let i = 0; i < priceTab.length; i++) {
        sum = sum + priceTab[i].innerHTML * qteTab[i].innerHTML        
    }
    Somme.innerHTML = sum
}