window.addEventListener("DOMContentLoaded", () =>{
"use strict"
// start//
const hero__start = document.querySelector(".hero__start")
const start__btn = document.querySelector(".start__btn")
const start__count = document.querySelector(".start__count")
const hero__game = document.querySelector(".hero__game")
const hero_game__end = document.querySelector(".hero_game__end")
hero__game.classList.add("d-none")
start__count.classList.add("d-none")
hero_game__end.classList.add("d-none")
let start__number = 5
const handleStartInterval = () =>{
    let start__interval = setInterval(() =>{
        if(start__number > 1){
            start__number --
            start__count.textContent = start__number
        }else{
           clearInterval(start__interval)
           handleStartGame()
        }
    }, 1000)
}
const handleStart = (event) =>{
    event.target.classList.add("d-none")
    if(event.target.className.includes("d-none")){
        start__count.classList.remove("d-none")
        start__count.classList.add("d-block")
        handleStartInterval()
    }
}
start__btn.addEventListener("click", handleStart)
// game//
const words = [
    "Border ",
    "primary",
    "danger ",
    "info ",
    "light",
    "dark",
    "grid",
    "color",
    "card",
    "Success",
    "secondary ",
    "tertiary",
    "emphasis ",
    "warning",
    "overview",
    "sass",
    "options",
    "color modes",
    "components",
    "variables",
    "optimize",
    "breakpoints",
    "containers",
    "columns",
    "gutters",
    "utilities",
    "z-index",
    "grid",
    "accordion",
    "alerts",
    "badge",
    "breadcrumb",
    "buttons",
    "button group",
    "carousel",
    "close button",
    "collapse",
    "dropdowns",
    "list group",
    "modal",
    "navbar",
    "navs & tabs",
    "offcanvas",
    "pagination",
    "placeholders",
    "popovers",
    "progress",
    "scrollspy",
    "spinners",
    "toasts",
    "tooltips",
]
const random__text = document.querySelector(".random__text")
const hero_game__input = document.querySelector(".hero_game__input")
const game_count__text = document.querySelector(".game__count")
let game__count = 60;
let true__write = 0; 
const handleRandomText = (words) =>{
    let random =words[parseInt(Math.random() * words.length)]
    random__text.textContent = random.trim()
    return random
}
 function handleStartGame(){
    hero__game.classList.remove("d-none")
    hero__game.classList.add("d-block")
    start__count.classList.add("d-none")
    let gameInterval = setInterval(() =>{
        if(game__count > 0){
            game__count --
            game_count__text.textContent = game__count
        }else{
            hero_game__input.readOnly = true
            game_count__text.classList.add("d-none")
            handleEndGame(true__write)

            clearInterval(gameInterval)
        }
        }, 1000)
    handleRandomText(words)
 }
 const handleKey = (event) =>{
        if(event.target.value.length){
            if(event.target.value.trim() === random__text.textContent.trim()){
                handleRandomText(words)
                event.target.value = null
                true__write++
            }
        }
 }
 hero_game__input.addEventListener("keyup", handleKey)
//  end//
const result__game = document.querySelector(".result__game")
const max_true_word = 20;
function handleEndGame(trues){
    hero__game.classList.add("d-none")
    hero_game__end.classList.add("d-block")
    hero_game__end.classList.remove("d-none")
    if(trues-0 === max_true_word){
        result__game.textContent = `Siz eng yuqori balga erishdingiz. Ball = ${trues}`
        result__game.classList.add("text-success")
    }else if((trues / 2) < max_true_word){
        result__game.textContent = `Siz o'rtacha natija ko'rsatdingiz. Ball = ${trues}`
    } 
    if(trues < 5){
        result__game.textContent = `Sizning natijangiz qoniqarsiz. Ball = ${trues}`
        result__game.classList.add("text-danger")
    }
    window.addEventListener("click", (event) =>{
        if(event.target.matches(".restart")){
            window.location.reload()
        }
    })
}
})