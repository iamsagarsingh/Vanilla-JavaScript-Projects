const container = document.querySelector('.container');
const totalSeats = document.getElementsByClassName('total-seats')[0]
const totalCost = document.getElementsByClassName('total-cost')[0]
const select = document.querySelector('#select')

let total = +select.value;



function updateValues(){
    const selectedSeats = document.querySelectorAll('.row .selected');
    totalSeats.innerText = selectedSeats.length;
    totalCost.innerText = total*selectedSeats.length;
    console.log("total",total)
}


select.addEventListener('change',e=>{
    total = e.target.value
    console.log("total")
})

container.addEventListener('click',e=>{
   if(!e.target.classList.contains('occupied') && e.target.classList.contains('seat')){
    console.log(e.target.classList.toggle('selected'));
   }
   updateValues();
})