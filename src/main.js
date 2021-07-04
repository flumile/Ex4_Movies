import allMovies from './movies.json'
import './main.scss'

document.addEventListener('DOMContentLoaded',function(){
    const set = 10
    const movie = document.getElementById('cards')
    const movies = allMovies.slice(0,set)
    console.log(movies)

    movies.forEach(num => {
        console.log(num.tomatoScore)
        const rateImg = "sfdfj"
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