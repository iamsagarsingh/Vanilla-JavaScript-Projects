const container = document.querySelector('.container');
const totalSeats = document.getElementsByClassName('total-seats')[0]
const totalCost = document.getElementsByClassName('total-cost')[0]
const allSeats = document.querySelectorAll('.row .seat:not(.occupied)')
const select = document.querySelector('#select')

let total = +select.value;

function populateUI(){
    let mySeats = JSON.parse(localStorage.getItem('seats'))
    if(mySeats !== null){
    mySeats.forEach(function(seat){
        [...allSeats][seat].classList.toggle('selected')
    })
}
    
}

populateUI()

function updateValues(){
    const selectedSeats = document.querySelectorAll('.row .selected');
    totalSeats.innerText = selectedSeats.length;
    totalCost.innerText = total*selectedSeats.length;
    seatsArray = [...selectedSeats].map(seat=>{
        return [...allSeats].indexOf(seat)
    })
    
    localStorage.setItem('seats',JSON.stringify(seatsArray))

}


select.addEventListener('change',e=>{
    total = e.target.value
})

container.addEventListener('click',e=>{
   if(!e.target.classList.contains('occupied') && e.target.classList.contains('seat')){
    e.target.classList.toggle('selected')
   }
   updateValues();
})