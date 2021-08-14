
 point =0;
 collision=true;
var dino=document.getElementById("dino");
var enemy=document.getElementsByClassName("enemy");


 //document.getElementById("dino").addEventListener("onclick",jump());

function jump(){
    if(dino.classList!="animate"){//use here original name of div not the varaible; 
 dino.classList.add("animate");// dino is the original name of div(dino)
    
    setTimeout(() => {
        dino.classList.remove("animate");
    }, 700);
}
}
document.addEventListener("keydown",function (event){
    if(event.key=="ArrowUp"){
    jump();
    }
    if(event.key=="ArrowRight"){
        var lft = 
        parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
        dino.style.left= lft + 115 + "px";
    }
    if(event.key=="ArrowLeft"){
        var lft = 
        parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
        dino.style.left= lft - 115  + "px";
    }
});


setInterval(() => {
    var dino=document.querySelector("#dino");
    var gameOver=document.querySelector("#gameover");
    var enemy=document.querySelector(".enemy");

    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));
    ey=parseInt(window.getComputedStyle(enemy,null).getPropertyValue("left"));
    ex=parseInt(window.getComputedStyle(enemy,null).getPropertyValue("top"));

    let dist=Math.abs(dx-ex);//top
    let distr=Math.abs(dy-ey);//left

   

    if(dist<100 && distr<150){
        // console.log(dist,distr);
        document.getElementById("gameover").innerHTML="Game over";
        // enemy.style.animation="none";
        dino.style.animation="none";
        collision=false;
        enemy.classList.remove('enemymotion');
        alert("game over");
        location.reload();
        // alert("YOU LOSSEE");
    }
    else if(dist < 150 && collision==true){
        point++;
        highscore(point);
        collision=false;
        setTimeout(() => {
            collision=true;
        }, 1000);
        
    }

}, 100);

function highscore(point){
    score.innerHTML = "Your Highscore:" + point;    
}

