var prompt = require('prompt');
prompt.start();

var spots = {
    1 : ' ',
    2 : ' ', 
    3 : ' ',
    4 : ' ', 
    5 : ' ',
    6 : ' ',
    7 : ' ',
    8 : ' ',
    9 : ' '
}


function playTurn(number){
    prompt.get(['number'], (err, result) =>{
        if(err){
            console.log(err);
            return; 
        }
        console.log(typeof(result.number) , result.number);
        var num = result.number;
        spots[num] = '1';
        checker(spots);
         console.log(spots[1] + ' | ' + spots[2] + ' | ' + spots[3] + '\n' + '---------' + '\n'   
         +  spots[4] + ' | ' + spots[5] + ' | ' + spots[6] + '\n' + '---------' + '\n'
         + spots[7] + ' | ' + spots[8] + ' | ' + spots[9] + '\n');
         playTurn();
    });
    
}

function checker(object){
    if(object[1] === '1' && object[2] === '1' && object[3] === '1'){
        console.log('WINNER');
    }
    if(object[4] === '1' && object[5] === '1' && object[6] === '1'){
        console.log('WINNER');
    }
    if(object[7] === '1' && object[8] === '1' && object[9] === '1'){
        console.log('WINNER');
    }
    if(object[1] === '1' && object[4] === '1' && object[7] === '1'){
        console.log('WINNER');
    }
    if(object[2] === '1' && object[5] === '1' && object[8] === '1'){
        console.log('WINNER');
    }
    if(object[3] === '1' && object[6] === '1' && object[9] === '1'){
        console.log('WINNER');
    }
    if(object[1] === '1' && object[5] === '1' && object[9] === '1'){
        console.log('WINNER');
    }
    if(object[3] === '1' && object[5] === '1' && object[7] === '1'){
        console.log('WINNER');
    }
}




console.log('Enter a number');
// prompt.get(['number'], function(err, result){
//     console.log('INPUT', result.number);
//  })

playTurn();

 
