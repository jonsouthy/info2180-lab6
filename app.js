window.onload = function (){
    
    var onL = document.getElementById("btn");
    onL.addEventListener("click", display);
    var sb = document.getElementById("sall");
    sb.addEventListener("click",displayAll);
}


function display(){
    var key="definition";
    var request = new XMLHttpRequest();
    //request.open("GET","request.php?q=",true);
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
           document.getElementById("btn").innerHTML = alert(request.responseText);
        }
    };
        
    request.open("GET","request.php?q=" + key ,true);
    request.send();
}

function displayAll(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
            document.getElementById("sall").innerHTML = (request.responseText);
        }
    };
        
    request.open("GET","request.php?q=all=true",true);
    request.send();
}   
