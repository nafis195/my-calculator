/*
Bismillahir Rahmanir Rahim
Nafis Khan Chowdhury
My Calculator
script.js
Date - 04/14/2020
Time - 7:14 PM
*/





function showNumber(number){
    let existingNumber = $("#result").val();
    $("#result").val(existingNumber + number);
}


function clearNumber(){
    $("#result").val('');
}


function calculate(){
    let result = eval($("#result").val());
    $("#result").val(result);
}


function deleteNumber(){
    let monitorNumber = $("#result").val();
    $("#result").val(monitorNumber.slice(0, -1));
}