import * as d3 from "d3";

export default function createChart() {
  fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
  )
    .then(response => response.json())
    .then(data => {
      const height = 400,
        width = 500,
        padding = 30,
        dataPointRadius = 5,
        yearArray = data.map(d => d.Year),
        timeArray = data.map(d => d.Time),
        minYear = d3.min(yearArray),
        maxYear = d3.max(yearArray),
        minTimeMinutes = d3.min(timeArray).split(":")[0],
        minTimeSeconds = d3.min(timeArray).split(":")[1],
        minTime = new Date(),
        maxTimeMinutes = d3.max(timeArray).split(":")[0],
        maxTimeSeconds = d3.max(timeArray).split(":")[1],
        maxTime = new Date();

      minTime.setMinutes(minTimeMinutes);
      minTime.setSeconds(minTimeSeconds);
      maxTime.setMinutes(maxTimeMinutes);
      maxTime.setSeconds(maxTimeSeconds);

      const xScale = d3
        .scaleLinear()
        .domain([minYear, maxYear])
        .range([padding, width - padding]);
      const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
      const yScale = d3
        .scaleTime()
        .domain([minTime, maxTime])
        .range([padding, height - padding]);
      const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

      const svg = d3
        .select("#chartArea")
        .attr("width", width)
        .attr("height", height);

      const tooltip = d3
        .select("#chartAreaDiv")
        .append("div")
        .attr("id", "tooltip")
        .attr("class", "tooltip")
        .style("opacity", 0);

      svg
        .append("g")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .attr("id", "x-axis")
        .call(xAxis);
      svg
        .append("g")
        .attr("transform", "translate(" + padding + ",0)")
        .attr("id", "y-axis")
        .call(yAxis);

      svg
        .selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("data-xvalue", d => d.Year)
        .attr("data-yvalue", d => {
          let minutes = d.Time.split(":")[0];
          let seconds = d.Time.split(":")[1];
          let time = new Date();
          time.setMinutes(minutes);
          time.setSeconds(seconds);
          return time;
        })
        .attr("r", dataPointRadius)
        .attr("cx", d => xScale(d.Year))
        .attr("cy", d => {
          let minutes = d.Time.split(":")[0];
          let seconds = d.Time.split(":")[1];
          let time = new Date();
          time.setMinutes(minutes);
          time.setSeconds(seconds);
          return yScale(time);
        })
        .style("fill", "peachpuff")
        .on("mouseover", function(d, i) {
          d3.select(this).style("fill", "hotpink");
          tooltip
            .transition()
            .duration(100)
            .style("opacity", 1);
          tooltip
            .attr("data-year", d3.select(this).attr("data-xvalue"))
            .style("background-color", "white");
          tooltip
            .html(d3.select(this).attr("data-xvalue"))
            .style("left", d3.event.pageX + 5 + "px")
            .style("top", d3.event.pageY - 40 + "px");
        })
        .on("mouseout", function(d, i) {
          d3.select(this).style("fill", "peachpuff");
          tooltip.style("opacity", 0);
        });

      svg.append("div").attr("id", "legend");
    });
}
