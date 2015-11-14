$(document).ready(function() {
var mystack = stack()
    .on("activate", activate)
    .on("deactivate", deactivate);
var section = d3.selectAll("section"),
    follow = d3.select("#follow"),
    followAnchor = d3.select("#follow-anchor"),
    lorenz = d3.select("#lorenz"),
    followIndex = section[0].indexOf(follow.node()),
    lorenzIndex = section[0].indexOf(lorenz.node());
function refollow() {
  followAnchor.style("top", (followIndex + (1 - mystack.scrollRatio()) / 2 - d3.event.offset) * 100 + "%");
}
function activate(d, i) {
  if (i === followIndex) mystack.on("scroll.follow", refollow);
  if (i === lorenzIndex) startLorenz();
}
function deactivate(d, i) {
  if (i === followIndex) mystack.on("scroll.follow", null);
  if (i === lorenzIndex) stopLorenz();
}
var lorenzInterval;
function startLorenz() {
  var δτ = 0.003,
      ρ = 28,
      σ = 10,
      β = 8 / 3,
      x = .5,
      y = .5,
      z = 10,
      n = 30;
  var width = 1280,
      height = 720;
  var canvas = d3.select("canvas")
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .style("width", "100%")
      .style("height", "100%")
      .attr("width", width)
      .attr("height", height);
  var color = d3.scale.linear()
      .domain([0, 20, 30, 50])
      .range(["yellow", "orange", "brown", "purple"])
      .interpolate(d3.interpolateHcl);
  var context = canvas.node().getContext("2d");
  context.lineWidth = .2;
  context.fillStyle = "rgba(0,0,0,.03)";
  d3.timer(function() {
    context.save();
    context.globalCompositeOperation = "lighter";
    context.translate(width / 2, height / 2);
    context.scale(12, 14);
    context.rotate(30);
    for (var i = 0; i < n; ++i) {
      context.strokeStyle = color(z);
      context.beginPath();
      context.moveTo(x, y);
      x += δτ * σ * (y - x);
      y += δτ * (x * (ρ - z) - y);
      z += δτ * (x * y - β * z);
      context.lineTo(x, y);
      context.stroke();
    }
    context.restore();
    return !lorenzInterval;
  });
  lorenzInterval = setInterval(function() {
    context.fillRect(0, 0, width, height);
  }, 100);
}
function stopLorenz() {
  lorenzInterval = clearInterval(lorenzInterval);
}

});