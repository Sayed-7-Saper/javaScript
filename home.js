/* document.write('GO AS javascrpit page:')
var age = prompt("enter you name");
document.getElementById("h").innerHTML= age ;
document.write(); */


function fun(){
    var x= f1.t1.value;
    var y =f1.t2.value;
    document.write("<table border='3px solid blue'><tr><th>Name:</th><td>"+x+"</td> </tr><tr> <th>Age:</th> <td>"+y+"</td></tr></table>")


}

function fun2(){
    var userarry=['sayed','ahmed','ail'];
    var passarry=['123','456','789'];
    var x= f1.t1.value;
    var y =f1.t2.value;
    var check=false;
    if (x==""){
        alert('enter your name:')
        check=true
    }
    for(var i =0; i<userarry.length;i++){
        if (userarry[i]==x)
        {check=true;
            if(passarry[i]==y)
            document.write('success and allow to go ')
            else
            { alert("invaild password")}
            break;

        }
        else
        { alert("the user Name Not Found")}
    }
   // if(check==false){
     //   alert("the user Name Not Found")
    //}
}
//challenge 1:
/*
function ageDay(){
var cur =prompt("Enter current Year:")
var brithYear= prompt("What year were you born .... S");
var days = (cur - brithYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are'+ days +'days for life');
h1.setAttribute('id', 'ageDay');
h1.appendChild(textAnswer)
document.getElementById('flex-box-result').appendChild(h1);

}

*/




function ageDay(){
    var cur =prompt("Enter current Year:")
    var brithYear= prompt("What year were you born .... S");
    var days = (cur - brithYear) * 365;
   
    document.getElementById('sw').innerHTML='you are'+ days +'days for life';
}









/*
function ageDay1(){
    var brithYear= prompt("What year were you born .... S");
    var days = (2021 - brithYear) * 365;
    var n = "you are :"+days+" :dayes in life"
    document.getElementById('sw').innerHTML=n;
    var m= document.getElementById('sw')
    m.setAttribute('id',"day")
    console.log(m.getAttribute('id'))
    
}*/
function reset(){
    document.getElementById('ageDay').remove();
}



// challenge 2:

function generateCat(){
    var image= document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src='jav.gif.jpg'
    image.setAttribute('width',150);
    image.setAttribute('height',150);
    div.appendChild(image);
}
 




// callenge 3:
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer  Choice',botChoice);
    results = decideWinner(humanChoice,botChoice) //[0,1] human lose | human won
    console.log( 'Show Result:',results);
    message = finaMessage(results);
    console.log(message)
    rpsFrontEnd(humanChoice, botChoice, message);
    
}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number){
    return ['rock','paper','scissors'] [number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissors':1 , 'rock':0.5 , 'paper':0 },
        'paper':{'rock':1 , 'paper':0.5 ,'scissors':0 },
        'scissors':{'paper':1 ,'scissors':0.5 , 'rock':1}

    };
    var yourScore = rpsDatabase[yourChoice] [computerChoice];
    var computerScore= rpsDatabase[computerChoice] [yourChoice];
    return [yourScore , computerScore];

}
function finaMessage([ yourScore, computerScore]){
    if (yourScore === 0 && computerScore > 0 ){
        return {'message':'you lose !','color':'red'};
    } else if (yourScore === 0.5 && computerScore === 0.5){
        return {'message':'you tied !','color':'blue'};
    } else{
        return {'message':'you Won !','color':'green'};
    }

}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase ={
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissore').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChoice]+"' heigth=150 width=150  style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color']+"; font-size:60px padding:30px;'>" + finaMessage
    botDiv.innerHTML="<img src='"+imagesDatabase[botImageChoice]+"' heigth=150 width=150  style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}
 // Challenge 4:
var all_butttons = document.getElementsByTagName('button');
var copyAllButton=[];
for(var i=0;i<all_butttons.length;i++){
    copyAllButton.push(all_butttons[i].classList[1]);
}
console.log(copyAllButton);

function buttonColorChange(butThingy){
    if (butThingy ==='red'){
        buttonRed();
    }else if (butThingy ==='green'){
        buttonGreen();
    }else if (butThingy ==='reset'){
        buttonColorReset();
    }else if (butThingy === 'random'){
        randomColor();
    }
}

function buttonRed(){
    for (let i=0; i<all_butttons.length;i++){
        all_butttons[i].classList.remove(all_butttons[i].classList[1])
        all_butttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for (let i=0; i<all_butttons.length;i++){
        all_butttons[i].classList.remove(all_butttons[i].classList[1])
        all_butttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i<all_butttons.length;i++){
        all_butttons[i].classList.remove(all_butttons[i].classList[1])
        all_butttons[i]
    }
}





