import allMovies from './movies.json'
import './main.scss'

document.addEventListener('DOMContentLoaded',function(){
    const set = 50
    const movie = document.getElementById('cards')
    const movies = allMovies.slice(0,set)
    console.log(movies)

    movies.forEach(num => {
        const rateImg = getRateIMG(num.tomatoIcon)
        const movieDom = `<div class="card">
        <img class="main-img" src="${num.posters.primary}" alt="">
        <div class="title">${num.title}</div>
        <div class="rate">
            <img class="rate-img" src="${rateImg}" alt="rate">
            <div class="percent">${num.tomatoScore}%</div>
            </div>
            <div class="showing">Available ${num.theaterReleaseDate}</div>
        </div>`
        movie.insertAdjacentHTML('beforeend',movieDom)
    })
})

function getRateIMG(iconName){
    let ic=iconName
    console.log(ic)
    if(ic === "fresh"){return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg'}
    else if(ic === "certified_fresh"){return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg'}
    else if(ic === "rotten"){return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg'}
}