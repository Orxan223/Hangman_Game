var sozler = ["alma", "armud", "banan", "nar"]

var sans = document.querySelector('#sans')
var q = document.querySelector('#qalibiyyet')
var m = document.querySelector('#meglubiyyet')
var i = document.querySelector('#isdifadeci')
var d = document.querySelector('#duzgun')
var t = document.querySelector('#texmin')
var b = document.querySelector('#bitdi')


var sozIndex = Math.floor(Math.random() * sozler.length);
var soz = sozler[sozIndex]
console.log(soz)
var alt = [...soz].fill("_")
console.log(alt)
var texminler = []
var limit = 9
var qalib = 0
var meglubiyyet = 0
window.onkeyup = function (e) {
    for (let i = 0; i < soz.length; i++) {
       
        if (soz[i] == e.key) {
            
            d.innerHTML = alt
            alt[i] = e.key
            

        } else if (alt.join('') == soz) {
            qalib++
            q.innerHTML = "Qalib oldunuz"
        }

    }
    
texminler.push(e.key)
t.innerHTML = texminler


    for (let i = 0; i < texminler.length; i++) {
        sans.innerHTML = limit
        if (limit === 0) {
            qalib++
            sans.innerHTML = alert('Oyun bitdi')

            return


        } else {
            sans.innerHTML = limit
        }

    }
    limit--


}


