console.log("Welcome to My music");

let songIndex = 0;

let audioElement = new Audio('music1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = 
[
    {songName: "Love Me Like You Do", filePath: "music/1.mp3", coverPath: "cover1.jfif"},
    {songName: "Girl like you- Maroon5", filePath: "music/2.mp3", coverPath: "cover2.jfif"},
    {songName: "Lover-Taylor swift", filePath: "music/3.mp3", coverPath: "cover.jfif"},
    {songName: "Perfect-ED SHEEREN ", filePath: "music/4.mp3", coverPath: "cover3.jfif"},
    {songName: "LIKE THAT-Bea Mille", filePath: "music/5.mp3", coverPath: "cover4.jfif"},
    {songName: "If You Love Her Like That- Forest Blakk ", filePath: "music/6.mp3", coverPath: "cover5.jfif"},
    {songName: "The Wolf-The Spencer Lee", filePath: "music/7.mp3", coverPath: "cover6.jfif"},
    {songName: "STAY-Justin beiber ", filePath: "music/8.mp3", coverPath: "cover7.jfif"},
    {songName: "I Like Me Better- LAUV", filePath: "music/9.mp3", coverPath: "cover8.jfif"},
    {songName: "Levitating- DUA LIPA", filePath: "music/10.mp3", coverPath: "cover9.jfif"},
]

songItems.forEach((element, i)=>
{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click', (e)=>
    { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>
{
    if(songIndex>=10)
    {
        songIndex = 0
    }
    else
    {
       songIndex +=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})