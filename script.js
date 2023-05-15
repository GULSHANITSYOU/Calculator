const getcolor = () => {
    let randomNumber = Math.floor( Math.random() *1677725); 
    let randomCode = "#" + randomNumber.toString(16) ; 
    const theam = document.getElementById("container") ;
    theam.style.backgroundColor = randomCode ;  
    randomNumber = Math.floor( Math.random() *1677725); 
    randomCode = "#" + randomNumber.toString(16) ; 
    const theam2 = document.getElementById("con") ;
    theam2.style.backgroundColor = randomCode ;  
}


const getcolor2 = () => {
   
   
}

document.getElementById("btn").addEventListener("click" , getcolor) ; 

getcolor() ; 