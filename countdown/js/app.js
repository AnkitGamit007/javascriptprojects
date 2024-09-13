const endDate = "16 March 2023 3:31 PM"

//console.log(endDate)

//it gets the end-date id of div 
document.getElementById("end-date").innerText=endDate;

// it will get all the element of input type as an object
const inputs=document.querySelectorAll("input");



function clock() {
    // it converts the endDate into date type
    const end = new Date(endDate); // 
    // console.log(end)

    //it gets the current date
    const now = new Date();

    //it creates the difference from enddate and current date and returns in millisecond
    const diff = (end-now)/1000;
    //console.log(diff);

    //it will check if countdown is over i.e diff is less than 0 negative it will return
    if(diff<0) return;

    //convert into days Math.floor(diff / 3600  / 24);
    //math.floor removes the decimals

    //we can access input like an object or array
    inputs[0].value = Math.floor(diff / 3600  / 24);


    // gives the remaining hours after substracting the days console.log(Math.floor(diff / 3600) %24)

    inputs[1].value = Math.floor(diff / 3600) %24;

    // for minutes
    inputs[2].value= Math.floor(diff / 60) %60;

    //for seconds
    inputs[3].value =Math.floor(diff %60);


}
//intial call
// this will update time only when we refresh page
clock();

// 1 day =24 hrs
// 1 hr = 60 min
// 60 min =3600 sec

// in order to update time every second we will use setinterval

setInterval( clock , 1000);