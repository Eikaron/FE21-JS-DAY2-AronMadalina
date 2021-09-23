//Why can we not pass argument from outside?

let newString = function(str="i am a web developer"){

    let firstletter = str.charAt(0);
    let firstletterCap = firstletter.toUpperCase();

    let strSliced = str.slice(1);

    let newString = firstletterCap+strSliced
    console.log(newString);
}

newString();