let active = false;

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
    for(let i=1; i < 47; i++){
        let img = document.createElement('img');
        img.src = "images/pic" + i + ".jpg";
        document.getElementById("col1").appendChild(img);
    }
    for(let i=47; i < 86; i++){
        let img = document.createElement('img');
        img.src = "images/pic" + i + ".jpg";
        document.getElementById("col2").appendChild(img);
    }
    for(let i=86; i < 131; i++){
        let img = document.createElement('img');
        img.src = "images/pic" + i + ".jpg";
        document.getElementById("col3").appendChild(img);
    }
    for(let i=1; i < 131; i++){
        let img = document.createElement('img');
        img.src = "images/pic" + i + ".jpg";
        document.getElementById("col0").appendChild(img);
    }
}