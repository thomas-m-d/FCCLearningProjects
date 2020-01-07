import * as d3 from "d3";

export default function createChart() {
  fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  )
    .then(response => response.json())
    .then(data => {
      const width = 800,
        height = 500,
        padding = 30,
        barWidth = (width - 2 * padding) / data.data.length,
        datesArray = data.data.map(d => new Date(d[0])),
        minYear = d3.min(datesArray, d => d.getFullYear()),
        maxYear = d3.max(datesArray, d => d.getFullYear()),
        maxGDP = d3.max(data.data, d => d[1]);

      const xScale = d3
        .scaleTime()
        .domain([d3.min(datesArray), d3.max(datesArray)])
        .range([padding, width - padding]);

      const yScale = d3
        .scaleLinear()
        .domain([0, maxGDP])
        .range([height - padding, padding]);

      const tooltip = d3
        .select("#chartAreaDiv")
        .append("div")
        .attr("id", "tooltip")
        .attr("class", "tooltip")
        .style("opacity", 0);

      const barHeightScale = d3
        .scaleLinear()
        .domain([0, maxGDP])
        .range([0, height - 2 * padding]);

      const xAxis = d3.axisBottom(xScale);

      const yAxis = d3.axisLeft(yScale);

      const svg = d3
        .select("#chartArea")
        .attr("width", width)
        .attr("height", height);

      svg
        .append("g")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .attr("id", "x-axis")
        .call(xAxis);

      svg
        .append("g")
        .call(yAxis)
        .attr("transform", "translate(" + padding + ", 0)")
        .attr("id", "y-axis");

      svg
        .selectAll("rect")
        .data(data.data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("data-date", d => d[0])
        .attr("data-gdp", d => d[1])
        .attr("width", barWidth)
        .attr("height", d => barHeightScale(d[1]))
        .attr("x", (d, i) => xScale(datesArray[i]))
        .attr("y", d => height - (padding + barHeightScale(d[1])))
        .attr("fill", "yellow")
        .on("mouseover", function(d, i) {
          d3.select(this).style("fill", "hotpink");
          tooltip
            .transition()
            .duration(100)
            .style("opacity", 1);
          tooltip
            .attr("data-date", d3.select(this).attr("data-date"))
            .style("background-color", "white");
          tooltip
            .html(d[0])
            .style("left", d3.event.pageX + 5 + "px")
            .style("top", d3.event.pageY - 40 + "px");

          document.getElementById("chartP").innerHTML = String(tooltip.opacity);
        })
        .on("mouseout", function(d, i) {
          d3.select(this).style("fill", "yellow");
          tooltip.style("opacity", 0);
        });
    });
}
