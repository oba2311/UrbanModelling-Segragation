// javascript
var dataset = [
    // jews in jerusalem in hundreds:
    3.704,
7.287,
12.154,
8.740,
4.500,
6.100,
12.286,
6.000,
13.000,
7.000,
6.000,
11.000,
13.400,
19.900,
30.600,
40.000,
0,
54.963,
0,
0,
121.000,
131.800,
164.300,
208.700,
225.000,
0,
281.000,
316.000,
332.600,
]

////////////////////////////////////////////////////////////////////////
/////////xaxis
var XlabelsData = [
    {xaxis: '1-jan-1525'},
    {xaxis: '1-jan-1538'},
    {xaxis: '1-jan-1553'},
    {xaxis: '1-jan-1838'},
    {xaxis: '1-jan-1846'},
    {xaxis: '1-jan-1851'},
    {xaxis: '1-jan-1862'},
    {xaxis: '1-jan-1876'},
    {xaxis: '1-jan-1882'},
    {xaxis: '1-jan-1885'},
    {xaxis: '1-jan-1905'},
    {xaxis: '1-jan-1922'},
    {xaxis: '1-jan-1931'},
    {xaxis: '1-jan-1944'},
    {xaxis: '1-jan-1948'},
    {xaxis: '1-jan-1953'},
    {xaxis: '1-jan-1967'},
    {xaxis: '1-jan-1980'},
    {xaxis: '1-jan-1985'},
    {xaxis: '1-jan-1987'},
    {xaxis: '1-jan-1990'},
    {xaxis: '1-jan-1995'},
    {xaxis: '1-jan-2000'},
    {xaxis: '1-jan-2004'},
    {xaxis: '1-jan-2007'},
    {xaxis: '1-jan-2011'},
    {xaxis: '1-jan-2014'},
    {xaxis: '1-jan-2016'}
]

// var xAxis = "xaxis";


// var parseTime = d3.timeParse("%d-%b-%y");
// XlabelsData.forEach(function(d) {
//     d.xaxis = parseTime(d.xaxis);
// });
// x0 = d3.scaleTime().range([0, svgWidth-100]);
// x0.domain(d3.extent(XlabelsData, function(d) {
//     return d[xAxis]
// }));




// g.append("g")
// .attr("class", "axis")
// .attr("transform", "translate(0," + ypoint + ")")
// .call(d3.axisBottom(x0).tickFormat(d3.timeFormat("%Y-%m-%d")))
// .append("text")
// .attr("x", width / 2)
// .attr("y", margin.bottom * 0.9)
// .attr("dx", "0.32em")
// .attr("fill", "#000")
// .attr("font-weight", "bold")
// .attr("text-anchor", "start")
// .text("YYYY-MM-DD Format");

///////////////////////////////////////////////////////////////


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

var labels = svg.selectAll('labels')
    .data(dataset)
    .enter()
    .append('labels')
    .text(xAxis)
    .attr('y', function(d,i){
        return svgHeight  - 200;
    })
    .attr('x', function(d,i){
        return barWidth *i;
    })
    .attr('fill', "red");


    svg.append("text")      // text label for the x axis
        .attr("x", svgHeight+200)
        .attr("y",  svgHeight+60)
        .style("text-anchor", "middle")
        .attr('fill', 'white')
        .text("Date");