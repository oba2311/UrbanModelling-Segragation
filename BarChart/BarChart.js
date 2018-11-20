// javascript
var dataset = [
    // jews in jerusalem in hundreds:
    1.194,
    1.363,
    1.958,
    3.000,
    7.515,
    5.580,
    8.000,
    4.000,
    9.000,
    15.000,
    13.300,
    34.000,
    51.200,
    97.000,
    100.000,
    139.000,
    195.700,
    292.300,
    327.700,
    340.000,
    378.200,
    382.000,
    448.800,
    458.000,
    489.480,
    497.000,
    534.000,
    550.100,
]

var svgWidth = 1500, svgHeight = 570, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight+100);

var BarChart = svg.selectAll("rect").data(dataset)
    .enter()
    .append('rect')
    .attr('y', function(d){
        return svgHeight-d;
    })
    .attr('height', function(d){
        return d;
    })
    .attr('width', barWidth-barPadding)
    .attr('transform',function(d,i){
        var translate=[barWidth*i, 0];
        return "translate(" +translate +")";
    })
    .attr('fill', "white");

var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d;
    })
    .attr('y', function(d,i){
        return svgHeight - d - 2;
    })
    .attr('x', function(d,i){
        return barWidth *i;
    })
    .attr('fill', "white");

    svg.append("text")      // text label for the x axis
        .attr("x", svgHeight+200)
        .attr("y",  svgHeight+60)
        .style("text-anchor", "middle")
        .attr('fill', 'white')
        .text("Date");
