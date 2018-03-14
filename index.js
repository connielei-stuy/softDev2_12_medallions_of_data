//hardcoded medal values
var us = [{"cx":50, "cy":50, "r":9, "color":"brown"},
	  {"cx":200, "cy":200, "r":8, "color":"silver"},
	  {"cx":250, "cy":250, "r":6, "color":"yellow"}];
var can = [{"cx":50, "cy":50, "r":11, "color":"brown"},
	   {"cx":200, "cy":200, "r":8, "color":"silver"},
	   {"cx":250, "cy":250, "r":10, "color":"yellow"}];
var st = true; //US MEDALS


var svg = d3.select("svg");


//add circle elements
var circles = svg.selectAll("circle")
    .data(us)
    .enter()
    .append("circle");

var addAttr = function(){
   circles.attr("cx", function(d){return d.cx} )
	.attr("cy", function(d){return d.cy} )
	.attr("r", function(d){return d.r} )
	.style("fill", function(d){return d.color});
}

var update = function(country){
    circles = svg.selectAll("circle")
	.data(country);
    addAttr();
};

var button = d3.select("button")
    .text(function(){
	return "Show me US's medals!";
    })
    .on("click", function(){
	if(st)
	{ update(us);
	  button.text("Show me Canda's medals!");}
	else
	{ update(can);
	  button.text("Show me US's medals!");}
	st = !st;
    });
