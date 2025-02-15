function  clicked(){
    console.log("the button was clicked");
}
window.onload = function(){
    console.log("reload succesfully");
}

setInterval( () => {
    let a = new Date();
     let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
     document.getElementById('timeDisplay').innerHTML = time;
},1000);