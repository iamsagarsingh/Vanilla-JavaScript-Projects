const currencyOne = document.querySelector('#currency-value-one')
const currencyTwo = document.querySelector('#currency-value-two')

const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')

const swapValues = document.querySelector('.swap')

async function calculate(){
    const currencyFirst = currencyOne.value;
    const currencySecond = currencyTwo.value;
    const resposne = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFirst}`)
    const data = await resposne.json()
    const convertedData = data.rates[currencySecond] * amountOne.value;
    amountTwo.value = convertedData;



}

currencyOne.addEventListener('change',calculate)
currencyTwo.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
amountTwo.addEventListener('input',calculate)

swapValues.addEventListener('click',()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})

calculate();