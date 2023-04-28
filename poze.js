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