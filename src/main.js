import allMovies from './movies.json'
import './main.scss'

document.addEventListener('DOMContentLoaded',function(){
    const movie = document.getElementById('cards')
    //const movies = allMovies.slice(0,50)
    const movies = allMovies

    movies.forEach(num => {
        const movieDom = setDomData(num)
        movie.insertAdjacentHTML('beforeend',movieDom)
    })

    const rateType =document.querySelectorAll('.rate-img')
    console.log(rateType)
    rateType.forEach(btn =>{
        btn.addEventListener('click',function(){
            const rateName = btn.className
            const result = getFilterByType(rateName)
            clearDom(movie)
            result.forEach(num=>{
                const movieNewDom = setDomData(num)
                movie.insertAdjacentHTML('beforeend',movieNewDom)
            })
        })
    })
})

function clearDom(movie){
    movie.textContent= ''
}

function getFilterByType(type){
    const movies = allMovies
    const thisType = type.replace("rate-img ","")
    return movies.filter(num=>num.tomatoIcon === thisType)
}

function setDomData(num){
    const rateImg = getRateIMG(num.tomatoIcon)
    const a =`<div class="card">
    <img class="main-img" src="${num.posters.primary}" alt="">
    <div class="title">${num.title}</div>
    <div class="rate">
        <img class="rate-img ${num.tomatoIcon}" src="${rateImg}" alt="rate">
        <div class="percent">${num.tomatoScore}%</div>
        </div>
        <div class="showing">Available ${num.theaterReleaseDate}</div>
    </div>`
    return a
}

function getRateIMG(iconName){
    let ic=iconName
    if(ic === "fresh"){return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg'}
    else if(ic === "certified_fresh"){return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg'}
    else if(ic === "rotten"){return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg'}
}