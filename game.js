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

var board = spots[1] + ' | ' + spots[2] + ' | ' + spots[3] + '\n' + '---------' + '\n'   
    +  spots[4] + ' | ' + spots[5] + ' | ' + spots[6] + '\n' + '---------' + '\n'
    + spots[7] + ' | ' + spots[8] + ' | ' + spots[9] + '\n'; 

function playTurn(number){
    prompt.get(['number'], (err, result) =>{
        if(err){
            console.log(err);
            return; 
        }
        console.log(result.number);
        var num = result.number;
        spots[num] = '1';
        console.log(spots);
         console.log(board);
    });
    
}




console.log('Enter a number');
// prompt.get(['number'], function(err, result){
//     console.log('INPUT', result.number);
//  })

playTurn();

 
