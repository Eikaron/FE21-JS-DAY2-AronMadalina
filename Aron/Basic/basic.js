//Exercise 1
function crystalGazer(partner, title, children, location){

console.log(`You will be a ${title} in ${location} and married to ${partner} with ${children} children`);
}

let a = "Clover Ebi";
let b = "Huntsman";
let c = 3 //Number of children
let d = "Remnant"

crystalGazer(a, b, c, d)



//Exercise 2
function ageCalc(birthyear, thisyear){

    age = thisyear-birthyear-1;
    age2 = thisyear-birthyear;

    return console.log("You are either "+age+" or "+age2)
}

ageCalc(1991,2021)



//Exercise 3
function degRadConversion(degree){
    return rad = degree * (Math.PI/180)
}

console.log(degRadConversion(90))


//Exercise 4
function areaVolumeBox(width, height, depth){

    area = width*height;
    volume = width*height*depth;

    console.log("The area of the box is "+area);
    console.log(`The volume of the box is ${volume}`);

    return boxvalues = [area, volume]

}

let width = 2;
let height = 7;
let depth = 5;

areaVolumeBox(width, height, depth)

console.log("Area and Volume are ", areaVolumeBox(width, height, depth))