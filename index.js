var sozler = ["alma", "armud", "banan", "nar"]

var sans = document.querySelector('#sans')
var q = document.querySelector('#qalibiyyet')
var i = document.querySelector('#isdifadeci')
var d = document.querySelector('#duzgun')
var t = document.querySelector('#texmin')
var b = document.querySelector('#bitdi')

var sozIndex = Math.floor(Math.random() * sozler.length);
var soz = sozler[sozIndex]
console.log(soz)

var alt = [...soz].fill("_")
console.log(alt)
d.innerHTML = alt

var texminler = []
var limit = 9
var qalib = 0


window.onkeyup = function (e) {
    for (let i = 0; i < soz.length; i++) {
        if (soz[i] === e.key) {
            alt[i] = e.key
            d.innerHTML = alt
            if (alt.join('').includes('_') == false) {
                console.log(alt)
                console.log(alt.join('').includes('_') == false)
                // alt xet qalmadisa qalib oluruq
                qalib++
                q.innerHTML = qalib
                alert("Siz qalib oldunuz")
            }
        }
    }
    

    texminler.push(e.key)
    t.innerHTML = texminler
    
   
    for (let i = 0; i < texminler.length; i++) {
        sans.innerHTML = limit
        if (limit === 0) {
            sans.innerHTML = alert('Oyun bitdi, bir daha cehd edin')

            return


        }

    }
    limit--


}


