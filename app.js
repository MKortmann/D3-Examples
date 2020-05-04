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
  .attr("cx", "50")
  .attr("cy", "50")
  .attr("r", 50)
  .attr("fill", "red");

svg
  .append("rect")
  .attr("x", "100")
  .attr("y", "100")
  .attr("width", "50")
  .attr("height", "80");
