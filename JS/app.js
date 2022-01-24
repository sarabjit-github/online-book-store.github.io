// for sticky navbar
window.onscroll = ()=>{
    if(scrollY > 85){
        document.querySelector('.header .header-2').classList.add('active')
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}
window.onload = ()=>{

    searchForm.classList.remove('active')

    if(scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}


// for search bar on media-queries(768px)
var searchForm = document.querySelector('.search-form');
var searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active')
})

//for login form
let loginForm = document.querySelector('.login-form-container');
let loginBtn = document.getElementById('login-btn');
let closeLoginBtn = document.getElementById('close-login-btn');
loginBtn.addEventListener('click', ()=>{
    loginForm.classList.toggle('active')
})

closeLoginBtn.addEventListener('click', ()=>{
    loginForm.classList.remove('active')
})













