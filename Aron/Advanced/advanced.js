
function timeConvert(minutes) {
    
    if (minutes > 60) {
        hours = Math.floor(minutes/60);
        minRest = minutes % 60;
        
        console.log(minutes+" Minutes = "+hours+ " and "+ minRest+" minute(s).");
    }

    else {
        console.log(minutes+" minutes")
    }
}

let minutes = 200;

timeConvert(minutes)