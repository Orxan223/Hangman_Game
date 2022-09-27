var sozler = ["alma", "armud", "banan", "nar"]

var s = document.querySelector('#sehv')
var sans = document.querySelector('#sansqaldi')
var u = document.querySelector('#udus')
var m = document.querySelector('#meglubiyyet')
var i = document.querySelector('#isdifadeci')
var d = document.querySelector('#duzgun')
var t = document.querySelector('#texmin')


var sozIndex = Math.floor(Math.random() * sozler.length);
var soz = sozler[sozIndex]

var i = 0
var texminler = []
t.innerHTML = texminler
console.log(texminler)
window.onkeyup = function(e){
    texminler.push(e.key) 
}





