'use strict';

function main(){

  //grab input value

  //put value inside fizz buzz conitional

  //disply results

  // //if(val % 3){
  //     .log(fizz)
  // }
  const result = [];

  $('button').on('click',function(e){
    e.preventDefault();
    //console.log($('input').val());
    let val = $('input').val();
    console.log(val);
    for(let i = 1; i <= val; i++)
      if(i % 15 === 0){
        result.push('fizzBuzz');
        //console.log('fizzBuzz');
      } else if (i % 5 === 0){
        result.push('buzz');
        //console.log('buzz');
      } else if(i % 3 === 0){
        result.push('fizz');
        //console.log('fizz');
      } else {
        result.push(i);
        //console.log(i);
      }
    //console.log(result);
    $('.js-results').text(result);

  });

}


$(main);