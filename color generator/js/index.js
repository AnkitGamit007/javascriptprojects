function getColor(){

    // this will generate random number
    const randomnumber = Math.floor(Math.random()* 16777215);

    // this will generate hexcode from random number
    const randomcode= "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText=randomcode;

    //this will copy code on your clipboard XD
    navigator.clipboard.writeText(randomcode);
}

//eventcall
document.getElementById("btn").addEventListener("click",getColor);


//intialcall
getColor();