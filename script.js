let unitValue = 20;
let value=document.getElementById('header')
let meterToFeetEl = document.getElementById('meter-to-feet')
let litersTogalonEl = document.getElementById('liter-to-galoon')
value.textContent =unitValue

function meterToFeet(){
let b = unitValue +  " " +'meters'+ " " + " " + " " + '=' + " "
let c = " " + '|' + unitValue + " " + 'feets' + " " + '=' + " "
let meter =0.3041
let feets = 3.38
let total = unitValue * feets
let saved = total.toFixed(2)
let meterToFeet = " " + saved + 'feet'

let feetToMeter =unitValue * meter + 'meters'
c+=feetToMeter 
b+= meterToFeet  + c 
meterToFeetEl.textContent =b
}
meterToFeet()


function litersTogalon(){
    let liter = 0.264;
    let total1 = liter * unitValue
    let saved1 = total1.toFixed(2)

    let literTogalon = saved1 + 'galon'
    let galoon = 3.781 
    let galonToLiter = galoon * unitValue + 'liter'
    let literValue =unitValue +  " " +'liters'+ " " + " " + " " + '=' + " "
    let galonValue =" " + '|' + unitValue + " " + 'galons' + " " + '=' + " "
    
    galonValue+= galonToLiter
    literValue += literTogalon + galonValue
    litersTogalonEl.textContent =literValue



}
litersTogalon()

