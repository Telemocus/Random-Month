const months = [ "January", "February","March","April","May","June","July","August","September","October","November","December" ];

const  monthDisplay = document.getElementById("month-display");
const guess = document.getElementById("guess")


guess.addEventListener( "click", ()=>{

     let randomIndex = Math.floor(Math.random() * months.length)
     let randomMonth = months[randomIndex];
   
     monthDisplay.textContent = randomMonth;
} ) 





