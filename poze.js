let active = false;
let vidNum = 1;
let max = 20;

//sidebar navigation < 1000px
function sidenav(){
    toggle();
    if (active){
        closeNav();
    } else {
        openNav();
    }
}
function openNav() {
    document.getElementById("sidenav").style.width = "200px";
    active = true;
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
    active = false;
}
function toggle(){
    let element = document.getElementById("hamburger-1")
    element.classList.toggle("is-active");
}

//img element creator onload
function poze(){
    for(let i=1; i < 55; i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        img.alt = "&#10063; image";
        document.getElementById("col1").appendChild(img);
    }
    for(let i=55; i < (109); i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        img.alt = "&#10063; image";
        document.getElementById("col2").appendChild(img);
    }
    for(let i=(110); i < 165; i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        img.alt = "&#10063; image";
        document.getElementById("col3").appendChild(img);
    }
    for(let i=1; i < 165; i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        img.alt = "&#10063; image";
        document.getElementById("col0").appendChild(img);
    }
}

//video slideshow control
function nextVid(){
    if(vidNum < max){
        vidNum = vidNum+1;
        let video = document.getElementById("video");
        let p = document.getElementById("count");
        p.innerText = vidNum;
        video.src="video/vid ("+vidNum+").mp4";
    }
}
function prevVid(){
    if (vidNum>1){
        vidNum = vidNum-1;
        let video = document.getElementById("video");
        let p = document.getElementById("count");
        p.innerText = vidNum;
        video.src="video/vid ("+vidNum+").mp4";
    }

}
function playVid(){
    let vid = document.getElementById("video");
    vid.play(); 
} 
  
function pauseVid(){ 
    let vid = document.getElementById("video");
    vid.pause(); 
} 