let active = false;
let vidNum = 1;
let max = 18;
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
function poze(){
    for(let i=1; i < 52; i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        document.getElementById("col1").appendChild(img);
    }
    for(let i=52; i < (98); i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        document.getElementById("col2").appendChild(img);
    }
    for(let i=(98); i < 147; i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        document.getElementById("col3").appendChild(img);
    }
    for(let i=1; i < 147; i++){
        let img = document.createElement('img');
        img.src = "images/pic (" + i + ").jpg";
        document.getElementById("col0").appendChild(img);
    }
}
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