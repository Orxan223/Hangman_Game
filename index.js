var sozler = ["alma", "armud", "banan", "nar"]

var sans = document.querySelector('#sans')
var u = document.querySelector('#udus')
var m = document.querySelector('#meglubiyyet')
var i = document.querySelector('#isdifadeci')
var d = document.querySelector('#duzgun')
var t = document.querySelector('#texmin')
var b = document.querySelector('#bitdi')


var sozIndex = Math.floor(Math.random() * sozler.length);
var soz = sozler[sozIndex]
console.log(soz)
var alt = [...soz].fill("_")
console.log(d)
var texminler = []
var limit = 9

window.onkeyup = function (e) {
    for (let i = 0; i < soz.length; i++) {
        if (soz[i] == e.key) {
            alt[i] = e.key
            d.innerHTML = alt
        } 
    }
    texminler.push(e.key)
    t.innerHTML = texminler
    for (let i = 0; i < texminler.length; i++) {
        
       
        if (limit === 0) {
           b.innerHTML = 'Oyun bitdi'
        }
        sans.innerHTML = limit
    }
    limit--


}


