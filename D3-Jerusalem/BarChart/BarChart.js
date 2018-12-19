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