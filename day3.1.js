

var countries = new XMLHttpRequest();

countries.open('GET','https://restcountries.com/v3.1/all',true);

countries.send();

countries.onload = function(){
    
var data = JSON.parse(countries.reponse)
console.log(data)
}
