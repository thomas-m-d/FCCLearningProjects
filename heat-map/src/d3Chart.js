import * as d3 from "d3";

export default function createChart() {
  fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
  )
    .then(response => response.json())
    .then(data => {
      const width = 1000,
        height = 500,
        padding = 60,
        monthlyData = data.monthlyVariance,
        yearArray = monthlyData.map(d => d.year),
        minYear = d3.min(yearArray),
        maxYear = d3.max(yearArray),
        minMonth = new Date(),
        maxMonth = new Date(),
        varianceArray = monthlyData.map(d => d.variance),
        minMidVariance = d3.quantile(varianceArray, 0.25),
        midVariance = d3.quantile(varianceArray, 0.5),
        midMaxVariance = d3.quantile(varianceArray, 0.75),
        cellWidth = (width - 2 * padding) / (maxYear - minYear),
        cellHeight = (height - 2 * padding) / 12;

      minMonth.setMonth(0);
      maxMonth.setMonth(11);

      const xScale = d3
        .scaleLinear()
        .domain([minYear, maxYear])
        .range([padding, width - padding]);
      const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

      const yScale = d3
        .scaleTime()
        .domain([minMonth, maxMonth])
        .range([padding, height - padding]);

      const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%B"));

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
        .attr("transform", "translate(" + padding + ", 0)")
        .attr("id", "y-axis")
        .call(yAxis);

      svg
        .selectAll("rect")
        .data(data.monthlyVariance)
        .enter()
        .append("rect")
        .attr("class", "cell")
        .attr("data-month", d => d.month - 1)
        .attr("data-year", d => d.year)
        .attr("data-temp", d => d.variance)
        .attr("height", cellHeight)
        .attr("width", cellWidth)
        .attr("x", d => xScale(d.year))
        .attr("y", d => {
          let date = new Date();
          return yScale(date.setMonth(d.month - 1));
        })
        .style("fill", d => {
          if (d.variance < minMidVariance) return "aqua";
          else if (d.variance < midVariance) return "aliceblue";
          else if (d.variance < midMaxVariance) return "lightsalmon";
          else return "brown";
        })
        .on("mouseover", function(d, i) {
          d3.select(this).style("fill", "yellow");
          tooltip
            .transition()
            .duration(1)
            .style("opacity", 1);
          tooltip
            .attr("data-year", d3.select(this).attr("data-year"))
            .style("background-color", "white");
          tooltip
            .html(d3.select(this).attr("data-year"))
            .style("left", d3.event.pageX + 5 + "px")
            .style("top", d3.event.pageY - 40 + "px");
        })
        .on("mouseout", function(d, i) {
          if (d.variance < minMidVariance)
            d3.select(this).style("fill", "aqua");
          else if (d.variance < midVariance)
            d3.select(this).style("fill", "aliceblue");
          else if (d.variance < midMaxVariance)
            d3.select(this).style("fill", "lightsalmon");
          else d3.select(this).style("fill", "brown");

          tooltip
            .transition()
            .duration(1)
            .style("opacity", 0);
        });

      const legend = d3
        .select("#legend")
        .attr("height", 50 + "px")
        .attr("width", width / 4);

      legend
        .append("rect")
        .attr("height", 40 + "px")
        .attr("width", width / 4 / 4)
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "aqua");

      legend
        .append("rect")
        .attr("height", 40 + "px")
        .attr("width", width / 4 / 4)
        .attr("x", width / 4 / 4)
        .attr("y", 0)
        .style("fill", "aliceblue");

      legend
        .append("rect")
        .attr("height", 40 + "px")
        .attr("width", width / 4 / 4)
        .attr("x", (2 * width) / 4 / 4)
        .attr("y", 0)
        .style("fill", "lightsalmon");

      legend
        .append("rect")
        .attr("height", 40 + "px")
        .attr("width", width / 4 / 4)
        .attr("x", (3 * width) / 4 / 4)
        .attr("y", 0)
        .style("fill", "brown");

      d3.select("#debugP").html(
        JSON.stringify(data.monthlyVariance[0]) +
          "<br><br>" +
          minMidVariance +
          "<br><br>" +
          midVariance +
          "<br><br>" +
          midMaxVariance +
          "<br><br>"
      );
    });
}
