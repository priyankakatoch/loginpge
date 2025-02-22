function  clicked(){
    console.log("the button was clicked");
}
window.onload = function(){
    console.log("reload succesfully");
}



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
});
 
setInterval( () => {
    let a = new Date();
     let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
     document.getElementById('timeDisplay').innerHTML = time;
},1000);


document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
});
