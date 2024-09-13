const question = [
    {
        'que' : 'Which of the following is markup language?',
        'a'   : 'HTML',
        'b'   : 'CSS',
        'c'   : 'JavaScript',
        'd'   : 'PHP',
        'correct' : 'a'
    },
    {
        'que' : 'What is styling in website called ?',
        'a'   : 'HTML',
        'b'   : 'CSS',
        'c'   : 'JavaScript',
        'd'   : 'PHP',
        'correct' : 'b'
    },
    {
        'que' : 'What adds life to webpage?',
        'a'   : 'HTML',
        'b'   : 'CSS',
        'c'   : 'JavaScript',
        'd'   : 'PHP',
        'correct' : 'c'
    },
    {
        'que' : 'Which of the following is backend language?',
        'a'   : 'HTML',
        'b'   : 'CSS',
        'c'   : 'JavaScript',
        'd'   : 'PHP',
        'correct' : 'd'
    }
]

//
let index=0;
let total = question.length;
let right=0,wrong=0;
const quebox = document.getElementById("quebox");
const options = document.querySelectorAll('.option');


function loadquestion(){
    if(index==total){
       return endquiz(); 
    }
    reset();
    const data= question[index];
    quebox.innerText=` ${index+1}.  ${data.que}`;
    // console.log(data);
    options[0].nextElementSibling.innerText= data.a;
    options[1].nextElementSibling.innerText= data.b;
    options[2].nextElementSibling.innerText= data.c;
    options[3].nextElementSibling.innerText= data.d;
}

loadquestion();

function getanswer(){
    let answer;
    options.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value; 
            }
        }
        ) 
        return answer; 
}

function submitquiz(){
    const data =question[index];
    const ans =getanswer();
    console.log(ans,data.correct);
    if(ans == data.correct){
            right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

function reset(){
    options.forEach(
        (input)=>{
          input.checked=false;
        }
        )
}

function endquiz(){
    document.getElementById("box").innerHTML= 
    `<h3> Thank You for Playing Quiz </h3> 
    <h2> ${right} / ${total} are correct </h2>
    `
}