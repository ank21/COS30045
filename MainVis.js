"use strict";

var wSightings; 

function barChart(dataset) {

    var w = 550;
    var h = 100; 
    var barPadding = 5;

    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h)



                svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", 0)
                .attr("x", function(d, i){
                    return i * (w / dataset.length); //make the bars spaced relative to the dataset
                })
                .attr("y", function(d){
                    return h - (d.wombats); //to flip the bar chart  
                })
                .attr("width", w / dataset.length - barPadding) //add a gap between the bars
                .attr("height", function(d){
                    return d.wombats;
                })
                .style("fill", function(d){
                    return "rgb(0,0, " + Math.round(d.wombats * 10) + ")";
                });

}

function init(){
    d3.csv("dataset.csv").then(function(data){
        console.log(data); //log the data onto the console
	wSightings = data; 
        barChart(wSightings);
    })
    
}
 
window.onload = init; 