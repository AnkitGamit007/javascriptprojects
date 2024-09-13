


const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghigklmnopqrstuvwxyz";
const number = "1234567890";
const symbolset = "!@#$%^&*()_+/";


//selectors
const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

function getrandomdata(dataset) {
  return dataset[Math.floor(Math.random() * dataset.length)];
}

function generatepassword(password = "") {
  if (upperinput.checked) {
    password = password + getrandomdata(upperset);
  }
  if (lowerinput.checked) {
    password = password + getrandomdata(lowerset);
  }
  if (numberinput.checked) {
    password = password + getrandomdata(number);
  }
  if (symbols.checked) {
    password = password + getrandomdata(symbolset);
  }

  if (password.length < totalchar.value) {
    return generatepassword(password);
  }
  // const clipboard = trimstring(password, totalchar.value);
  passbox.innerText = trimstring(password, totalchar.value);
  // navigator.clipboard.writeText(clipboard);
}

// document.getElementById("btn").addEventListener(
//     "click", function(){
//         generatepassword();

//     }); //you can add onClick on input element as well.

function trimstring(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}

generatepassword();
