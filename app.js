// D3 Examples

// Example 1

// d3.select("p").style("color", "brown");

// d3.selectAll("p").style("color", "brown");

// const a = document.querySelector(".canva");

// canva will be a d3 wrap object
const canvas = d3.select(".canva");

// add an svg element
const svg = canvas.append("svg").attr("width", "800").attr("height", "250");

svg
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 50)
  .attr("fill", "red");

svg
  .append("line")
  .attr("x1", 0)
  .attr("x2", 100)
  .attr("y1", 80)
  .attr("y2", 20)
  .attr("stroke", "black");

svg
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 50)
  .attr("height", 80)
  .attr("rx", 15)
  .attr("ry", 15)
  .attr("fill", "green");

svg
  .append("text")
  .text("Hello There")
  .attr("fill", "blue")
  .attr("font-size", "28")
  .attr("x", 50)
  .attr("y", 120);
