const curdate =document.getElementById("date")
let weathercon =document.getElementById("weathercon")

const tempStatus="Clouds";

        let a;
        let date;
        let time;
            setInterval(() => {
             a =new Date();
             date = a.toDateString();
             time=a.getHours() +':'+a.getMinutes();
            document.getElementById('date').innerHTML=time +" on " + date;
          }, 1000);