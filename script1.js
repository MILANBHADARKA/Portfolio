//for burger and sidebar

let body = document.querySelector('body');

let burger = document.querySelector('.burger');
// let navmobile = document.getElementById('hello');
let sidenav = document.getElementById('sidenav');
let main = document.querySelector('.main');
let about = document.querySelector('.about');
let skills = document.querySelector('.skills');


burger.addEventListener('click', () => {
    sidenav.classList.toggle('nav-v-res');
    //give animation to side nav
    sidenav.classList.toggle('nav-v-res-ani');

});
    
main.addEventListener('mouseenter', () => {
    if (sidenav.classList.contains('nav-v-res')) {
        sidenav.classList.remove('nav-v-res');
        sidenav.classList.remove('nav-v-res-ani');
    }
});

about.addEventListener('mouseenter', () => {
    if (sidenav.classList.contains('nav-v-res')) {

        sidenav.classList.remove('nav-v-res');
        sidenav.classList.remove('nav-v-res-ani');
    }
});

skills.addEventListener('mouseenter', () => {
    if (sidenav.classList.contains('nav-v-res')) {
        sidenav.classList.remove('nav-v-res');
        sidenav.classList.remove('nav-v-res-ani');
    }
});

sidenav.addEventListener('click', () => {
    if (sidenav.classList.contains('nav-v-res')) {
        sidenav.classList.remove('nav-v-res');
        sidenav.classList.remove('nav-v-res-ani');
    }
});





//for round progress bar

let round_video_editing = document.querySelector('.round-video-editing');
let per_video_editing = document.querySelector('.per-video-editing');
let video_editing_progressstartvalue = 0;
let video_editing_progressendvalue = 60;
let video_editing_speed = 13;

let progress_video_editing = setInterval(() => {
    if (video_editing_progressstartvalue >= video_editing_progressendvalue) {
        clearInterval(progress_video_editing);
    } else {
        video_editing_progressstartvalue++;
        per_video_editing.textContent = video_editing_progressstartvalue + '%';
        
        round_video_editing.style.background = `conic-gradient(#e8792a ${video_editing_progressstartvalue}%, #ededed ${video_editing_progressstartvalue + 3}%)`;
        
    }
},video_editing_speed);


let round_photo_editing = document.querySelector('.round-photo-editing');
let per_photo_editing = document.querySelector('.per-photo-editing');
let photo_editing_progressstartvalue = 0;
let photo_editing_progressendvalue = 70;
let photo_editing_speed = 13;

let progress_photo_editing = setInterval(() => {
    if (photo_editing_progressstartvalue >= photo_editing_progressendvalue) {
        clearInterval(progress_photo_editing);
    } else {
        photo_editing_progressstartvalue++;
        per_photo_editing.textContent = photo_editing_progressstartvalue + '%';
        round_photo_editing.style.background = `conic-gradient(#e8792a ${photo_editing_progressstartvalue}%, #ededed ${photo_editing_progressstartvalue + 3}%)`;
        
    }
},photo_editing_speed);



// for dark and white mode

let mode = document.querySelector('.mode');

mode.addEventListener('click', () => {

    if (mode.classList.contains('moon')) {
        mode.setAttribute('src', './assets/sun.svg');
        mode.classList.remove('moon');
        mode.classList.add('sun');
        body.classList.toggle('dark-mode');
    } 
    else {
        mode.setAttribute('src', './assets/moon.svg');
        mode.classList.remove('sun');
        mode.classList.add('moon');
        body.classList.toggle('dark-mode');
    }
});
