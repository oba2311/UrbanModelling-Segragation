 // start a server:

// Node.js
// Alternatively, if you demand a more responsive setup and already use nodejs...

// Install http-server by typing npm install -g http-server

// Change into your working directory, where yoursome.html lives

// Start your http server by issuing http-server -c-1

// This spins up a Node.js httpd which serves the files in your directory as static files accessible from http://localhost:8080


// The closure: This will contain difault values; those won't necessarily be used since
// the same values are defined dynamically later on (so it is used essentially as a fall back)
function bubbleChart() {
    var width = 960,
        height = 960,
        maxRadius = 6,
        columnForColors = "Year",
        columnForRadius = "Jews";

    function chart(selection) {
        var data = selection.datum();
        var div = selection,
            svg = div.selectAll('svg');
        svg.attr('width', width).attr('height', height);

        var tooltip = selection
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("color", "white")
            .style("padding", "8px")
            .style("background-color", "#626D71")
            .style("border-radius", "6px")
            .style("text-align", "center")
            .style("font-family", "monospace")
            .style("width", "400px")
            .text("");


        var simulation = d3.forceSimulation(data)
            .force("charge", d3.forceManyBody().strength([-50]))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .on("tick", ticked);

        function ticked(e) {
            node.attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                });
        }

		// Since the categorical data is years, there is not point in color coding the years,
		// as every year would have a different color thus, not really useful codes by coloring.
		// for color coding add 10 or 20 to d3.schemeCategory like d3.schemeCategory10
        var colorCircles = d3.scaleOrdinal(d3.schemeCategory);
		var scaleRadius = d3.scaleLinear()
		.domain([d3.min(data, function(d) 
			{return +d[columnForRadius];}), 
			d3.max(data, function(d) {return +d[columnForRadius];})])
		.range([5, 18])

        var node = svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr('r', function(d) {
                return scaleRadius(d[columnForRadius])
            })
            .style("fill", function(d) {
                return colorCircles(d[columnForColors])
            })
            .attr('transform', 'translate(' + [width / 2, height / 2] + ')')
            .on("mouseover", function(d) {
                tooltip.html(d[columnForColors] + "<br>" + d.title + "<br>" + d[columnForRadius] + " hearts");
                return tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
            })
            .on("mouseout", function() {
                return tooltip.style("visibility", "hidden");
            });
    }

    chart.width = function(value) {
        if (!arguments.length) {
            return width;
        }
        width = value;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) {
            return height;
        }
        height = value;
        return chart;
    };


    chart.columnForColors = function(value) {
        if (!arguments.columnForColors) {
            return columnForColors;
        }
        columnForColors = value;
        return chart;
    };

    chart.columnForRadius = function(value) {
        if (!arguments.columnForRadius) {
            return columnForRadius;
        }
        columnForRadius = value;
        return chart;
    };

    return chart;
}