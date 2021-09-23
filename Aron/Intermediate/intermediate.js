//Why can we not pass an argument from the outside?

//Exercise 1
let newString = function(str="i am a web developer"){

    let firstletter = str.charAt(0);
    let firstletterCap = firstletter.toUpperCase();

    let strSliced = str.slice(1);

    let newString = firstletterCap+strSliced
    console.log(newString);
}

newString();


//Exercise 2
function gradeAvg(grade1, grade2, grade3){

    average = (grade1+grade2+grade3)/3;
    document.getElementById("output").innerHTML;
    document.write(average.toFixed(1)) //Rounding to 1 decimal
    //How do I make this look nicer?
}

let maths = 3;
let physics = 5;
let english = 4;

gradeAvg(maths, english, physics);


