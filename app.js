// D3 Examples

// Example 1

// d3.select("p").style("color", "brown");

// d3.selectAll("p").style("color", "brown");

// const a = document.querySelector(".canva");

// canva will be a d3 wrap object
const canvas = d3.select(".canva");

let dataArray = [4, 15, 34, 60, 1, 20];

// add an svg element
const svg = canvas.append("svg").attr("width", "800").attr("height", "600");

// const svg = canvas.select("svg");

// const rect = svg.append("rect");

const rect = svg.selectAll("rect");

// Instead of hardcode all the rect in the html, we need to invoke the enter method.
// it will tell the browser to keep connecting elements until the array arrives it's end.

rect
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", 24)
  .attr("height", (d) => {
    return d * 2;
  })
  .attr("fill", "orange")
  .attr("y", (d, i) => {
    console.log(d, i);
    return 100 - d * 2;
  })
  .attr("x", (d, i) => {
    console.log(d, i);
    return i * 25;
  });

console.log(rect);

// svg
//   .append("circle")
//   .attr("cx", 50)
//   .attr("cy", 50)
//   .attr("r", 50)
//   .attr("fill", "red");

// svg
//   .append("line")
//   .attr("x1", 0)
//   .attr("x2", 100)
//   .attr("y1", 80)
//   .attr("y2", 20)
//   .attr("stroke", "black");

// svg
//   .append("rect")
//   .attr("x", 50)
//   .attr("y", 50)
//   .attr("width", 50)
//   .attr("height", 80)
//   .attr("rx", 15)
//   .attr("ry", 15)
// .attr("fill", "green");

// TEXT EXAMPLE
// svg
//   .append("text")
//   .text("Hello")
//   .attr("text-anchor", "start")
//   .attr("fill", "blue")
//   .attr("font-size", "28")
//   .attr("x", 80)
//   .attr("y", 20);
// svg
//   .append("text")
//   .text("There")
//   .attr("text-anchor", "middle")
//   .attr("fill", "blue")
//   .attr("font-size", "28")
//   .attr("x", 80)
//   .attr("y", 50);
// svg
//   .append("text")
//   .text("James")
//   .attr("stroke", "black")
//   .attr("text-anchor", "end")
//   .attr("fill", "blue")
//   .attr("font-size", "28")
//   .attr("x", 80)
//   .attr("y", 80);
