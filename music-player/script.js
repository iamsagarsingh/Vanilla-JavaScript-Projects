const backward = document.querySelector('#backward')
const play = document.querySelector('#play')
const forward = document.querySelector('#forward')
const musicBox = document.querySelector('.music-box')
const audio = document.getElementById('audio')
const song = document.getElementById('song')
const thumbnail = document.getElementById('thumbnail')

const playlist = ['hey','summer','ukulele']

let index = 1


function toggleBtn(){
    if(musicBox.classList.contains('play')){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        playSong(index);
    }
    else{
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        pauseSong()
    }
}

function toggleSong(){
    musicBox.classList.toggle('play');

    toggleBtn()
    
}

function playSong(index){
    audio.src = `music/${playlist[index]}.mp3`;
    thumbnail.src = `img/${playlist[index]}.jpg`;
    song.innerText = playlist[index];
    console.log(audio);
    audio.play()
}

function pauseSong(){
    audio.pause()
}

function playNext(){
    index++
    if(index === playlist.length){
        index = 0
    }

    playSong(index);
}

function playPrev(){
    index--;
    if(index < 0){
        index = playlist.length-1
    }
    toggleBtn()
    playSong(index)
}

play.addEventListener('click',toggleSong)

forward.addEventListener('click',playNext)
backward.addEventListener('click',playPrev)