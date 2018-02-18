// D3 is binding data values with HTML elements
// 
// selects ul and selects all li elements 
d3.select("ul").selectAll("li")

// elects the stuff in the elements of li
d3.select("ul").selectAll("li").nodes()

// console log li elements 
// console log the data
// console log the index
d3.select("ul").selectAll("li")
    .each(function(d,i){
        console.log("element", this);
        console.log("data", d);
        console.log("index", i)
    });

// binding elements in javaScript 

var arr = [50, 55, 53];

// bind the values in the elements 

d3.select("ul").selectAll("li")
    .data(arr)
    // create a function to return data 
    // text will replace it in the HTML 
    // you can play around with the such as 
    // d* 100 
    // return "Hi, my value is " + d
    .text(function(d){
        return d;
    });

// to append more data use append
// this append will add "li" into other "li"
var arr = [50, 55, 53, 54, 68];
d3.select("ul").selectAll("li")
    .data(arr)
    .append("li")
    .text(function(d){
        return d
    })

// to append "li" as "li" out of "li" element
// use enter

var arr = [50, 55, 53, 54, 68];
d3.select("ul").selectAll("li")
    .data(arr)
    .enter()
    .append("li")
    .text(function(d){
        return d
    })

// To remove elements 
// use exit()
// and remove()
// it will remove everyting but the arr data

var arr = [50, 55]

d3.select("ul").selectAll("li")
    .data(arr)
    .exit()
    .remove()

// select body and append div type

d3.select("body").append("div")

// select the new div 
// add new 'h2' elements 

d3.select("body").select("div")
    // select all "h2" will be created by append
    .selectAll("h2")
    .data(arr)
    .enter()
    // create all "h2" elements 
    .append("h2")
    .text(function(d){
        return d;
    })
