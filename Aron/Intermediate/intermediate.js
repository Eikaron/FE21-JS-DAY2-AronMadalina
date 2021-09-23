let string = "i am a web developer";

let newString = function(string){

    let firstletter = string.charAt(0);
    let firstletter2 = firstletter.toUpperCase()
    
    let string2 = string.slice(1)
    console.log(string2)
}

newString()