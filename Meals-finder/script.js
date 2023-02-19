const search = document.querySelector('#search')
const searchBtn = document.querySelector('.search-btn')
const heading = document.querySelector('.search-result')
const contentData = document.querySelector('.data')


async function showRecipie(id){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json()
    contentData.innerHTML = data.meals.map(d=>{
        return `
            <div class="meals-instruction">
                <h2>Instructions for ${d.strMeal}</h2>
                <p>${d.strInstructions}</p>
            </div>
        `
    }).join('')


}


async function getData(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value.trim()}`)
    const data = await response.json()
    if(data.meals === null){
        heading.innerHTML = 'Not found'
    }
    else{
        contentData.innerHTML = data.meals.map(d=>{
            return `
                <div class="meals" mealID=${d.idMeal}>
                    <img src="${d.strMealThumb}" alt="meal" />
                    <p>${d.strMeal}</p>
                </div>
            `
        }).join('')
        const meals = document.querySelectorAll('.meals')

        meals.forEach(function(meal){
            meal.addEventListener('click',function(){
                const id = meal.getAttribute('mealID')
                showRecipie(id)
            })
        })

        

    }
    
}

searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(search.value.trim() === ""){
        heading.innerText = 'Please enter the meal to search'
    }
    else{
        heading.innerText = `showing result for ${search.value.trim()}` 
        getData()
    }
})


